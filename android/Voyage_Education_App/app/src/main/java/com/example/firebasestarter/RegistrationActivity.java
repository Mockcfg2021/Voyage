package com.example.firebasestarter;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.app.ProgressDialog;
import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.CompoundButton;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.Spinner;
import android.widget.Toast;


import com.example.firebasestarter.LoginActivity;
import com.example.firebasestarter.User;
import com.example.firebasestarter.databinding.ActivityRegistrationBinding;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.auth.AuthResult;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.database.FirebaseDatabase;

public class RegistrationActivity extends AppCompatActivity implements AdapterView.OnItemSelectedListener {

    ActivityRegistrationBinding binding;
    FirebaseAuth auth;
    FirebaseDatabase database;
    private String[] role;
    private String selectedRole;
    ProgressDialog progressDialog;
    RadioGroup radioGroup;

    RadioButton radioButton;
    boolean doubleBackToExitPressedOnce = false;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        binding = ActivityRegistrationBinding.inflate(getLayoutInflater());
        setContentView(binding.getRoot());

        auth = FirebaseAuth.getInstance();
        database = FirebaseDatabase.getInstance();

        //Spinner Role

        binding.spinnerRole.setOnItemSelectedListener(this);
        role=getResources().getStringArray(R.array.Role);
        ArrayAdapter adapter=new ArrayAdapter(this, android.R.layout.simple_spinner_item,role);
        adapter.setDropDownViewResource(android.R.layout.simple_spinner_item);
        binding.spinnerRole.setAdapter(adapter);

        progressDialog = new ProgressDialog(RegistrationActivity.this);
        progressDialog.setTitle("Creating Account");
        progressDialog.setMessage("We are creating your account");

        binding.tvreg.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent=new Intent(RegistrationActivity.this, LoginActivity.class);
                startActivity(intent);
            }
        });

        binding.btnSignup.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                if (binding.etEmail.getText().toString().isEmpty()) {
                    binding.etEmail.setError("This field cannot remain empty");
                    return;
                }
                if (binding.etPassword.getText().toString().isEmpty()) {
                    binding.etPassword.setError("This field cannot remain empty");
                    return;
                }
                if (binding.etuserName.getText().toString().isEmpty()) {
                    binding.etuserName.setError("This field cannot remain empty");
                    return;
                }

                progressDialog.show();

                auth.createUserWithEmailAndPassword
                        (binding.etEmail.getText().toString(), binding.etPassword.getText().toString()).
                        addOnCompleteListener(new OnCompleteListener<AuthResult>() {
                            @Override
                            public void onComplete(@NonNull Task<AuthResult> task) {
                                progressDialog.dismiss();
                                if (task.isSuccessful()) {
                                    final String id = task.getResult().getUser().getUid();
                                    FirebaseAuth.getInstance().getCurrentUser().sendEmailVerification().addOnCompleteListener(new OnCompleteListener<Void>() {
                                        @Override
                                        public void onComplete(@NonNull Task<Void> task) {
                                            if (task.isSuccessful()) {
                                                User user = new User(binding.etuserName.getText().toString(), binding.etEmail.getText().toString(),binding.etNumber.getText().toString(),binding.etPassword.getText().toString(),selectedRole,binding.etSchool.getText().toString(),0,0);

                                                database.getReference().child("NewUsers").child(id).setValue(user);
                                                Toast.makeText(RegistrationActivity.this, "Registered Successfully, Please check your email for verification", Toast.LENGTH_LONG).show();
                                            } else {
                                                Toast.makeText(RegistrationActivity.this, task.getException().getMessage(), Toast.LENGTH_LONG).show();
                                            }

                                        }
                                    });

                                } else {
                                    Toast.makeText(RegistrationActivity.this, task.getException().getMessage(), Toast.LENGTH_LONG).show();
                                }

                            }
                        });

            }
        });

    }
    @Override
    public void onBackPressed() {
        if (doubleBackToExitPressedOnce) {
            Intent startMain = new Intent(Intent.ACTION_MAIN);
            startMain.addCategory(Intent.CATEGORY_HOME);
            startMain.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            startActivity(startMain);
            return;
        }
        this.doubleBackToExitPressedOnce = true;
        Toast.makeText(RegistrationActivity.this,"There is no back action, Click again to exit",Toast.LENGTH_SHORT).show();

        new Handler(Looper.getMainLooper()).postDelayed(new Runnable() {

            @Override
            public void run() {
                doubleBackToExitPressedOnce=false;
            }
        }, 2000);
        return;
    }

    @Override
    public void onItemSelected(AdapterView<?> parent, View view, int position, long id) {

        if(position==1)
        {
            binding.etSchool.setText("Voyage Educare Foundation");
        }
        selectedRole=role[position];
    }

    @Override
    public void onNothingSelected(AdapterView<?> parent) {

    }
}