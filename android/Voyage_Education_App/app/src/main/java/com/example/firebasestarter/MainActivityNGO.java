package com.example.firebasestarter;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.os.Bundle;
import android.view.View;
import android.widget.Toast;

import com.example.firebasestarter.databinding.ActivityMainNGOBinding;
import com.example.firebasestarter.databinding.ActivityMainTeacherBinding;
import com.google.android.gms.tasks.OnFailureListener;
import com.google.android.gms.tasks.OnSuccessListener;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;
import com.google.firebase.storage.FileDownloadTask;
import com.google.firebase.storage.FirebaseStorage;

import java.io.File;
import java.io.IOException;

public class MainActivityNGO extends AppCompatActivity {
ActivityMainNGOBinding binding;


    FirebaseDatabase database;
    FirebaseAuth auth;
    String profileData;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        binding=ActivityMainNGOBinding.inflate(getLayoutInflater());
        setContentView(binding.getRoot());

        setSupportActionBar(binding.toolbar);

        auth = FirebaseAuth.getInstance();
        database = FirebaseDatabase.getInstance();

        binding.timePassMood.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent=new Intent(MainActivityNGO.this,EditProfileActivity3.class);
                startActivity(intent);
            }
        });


        database.getReference().child("NewUsers").child(auth.getUid()).addListenerForSingleValueEvent(new ValueEventListener() {
            @Override
            public void onDataChange(@NonNull DataSnapshot snapshot) {
                binding.profileName.setText(snapshot.child("username").getValue().toString());
                if (snapshot.hasChild("profileImage")) {
                    profileData = snapshot.child("profileImage").getValue().toString();
                    try {
                        final File file = File.createTempFile("image", "jpg");
                        FirebaseStorage.getInstance().getReference().child("profile_pictures").child(auth.getUid()).getFile(file).addOnSuccessListener(new OnSuccessListener<FileDownloadTask.TaskSnapshot>() {
                            @Override
                            public void onSuccess(FileDownloadTask.TaskSnapshot taskSnapshot) {
                                Bitmap bitmap = BitmapFactory.decodeFile(file.getAbsolutePath());
                                binding.profileImage.setImageBitmap(bitmap);
                            }
                        }).addOnFailureListener(new OnFailureListener() {
                            @Override
                            public void onFailure(@NonNull Exception e) {
                                Toast.makeText(MainActivityNGO.this, e.getMessage(), Toast.LENGTH_SHORT).show();
                            }
                        });
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                } else

                    binding.profileImage.setImageResource(R.drawable.ic_profile);
            }
            public void onCancelled(@NonNull DatabaseError error) {

            }
        });

        binding.btnLogout.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                auth.signOut();
                Intent intent=new Intent(MainActivityNGO.this,LoginActivity.class);
                startActivity(intent);
            }
        });


    }
}