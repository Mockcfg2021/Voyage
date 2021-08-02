package com.example.firebasestarter;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

import com.example.firebasestarter.Adapters.OnBoardAdapter;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;
import com.smarteist.autoimageslider.IndicatorAnimations;
import com.smarteist.autoimageslider.IndicatorView.draw.controller.DrawController;
import com.smarteist.autoimageslider.SliderAnimations;
import com.smarteist.autoimageslider.SliderView;

public class OnboardingActivity extends AppCompatActivity {

    SliderView sliderView;
    Button btn;
    private FirebaseAuth auth;
    FirebaseDatabase database;
    String Role;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_onboarding);

        sliderView = findViewById(R.id.imageSlider);
        final OnBoardAdapter adapter = new OnBoardAdapter(this);
        sliderView.setSliderAdapter(adapter);
        btn = findViewById(R.id.btn);
        auth=FirebaseAuth.getInstance();
        database = FirebaseDatabase.getInstance();

        sliderView.setIndicatorAnimation(IndicatorAnimations.SLIDE); //set indicator animation by using SliderLayout.IndicatorAnimations. :WORM or THIN_WORM or COLOR or DROP or FILL or NONE or SCALE or SCALE_DOWN or SLIDE and SWAP!!
        sliderView.setSliderTransformAnimation(SliderAnimations.SIMPLETRANSFORMATION);
        sliderView.setAutoCycleDirection(SliderView.AUTO_CYCLE_DIRECTION_BACK_AND_FORTH);
        sliderView.startAutoCycle();

        sliderView.setOnIndicatorClickListener(new DrawController.ClickListener() {
            @Override
            public void onIndicatorClicked(int position) {
                sliderView.setCurrentPagePosition(position);
            }
        });

        btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                database.getReference().child("NewUsers").child(auth.getUid()).addListenerForSingleValueEvent(new ValueEventListener() {
                    @Override
                    public void onDataChange(@NonNull DataSnapshot snapshot) {
                        Role=snapshot.child("role").getValue().toString();
                       if(Role.equals("Teacher"))
                       {
                           Intent intent=new Intent(OnboardingActivity.this,MainActivityTeacher.class);
                           startActivity(intent);
                       }
                       else if(Role.equals("NGO"))
                       {
                           Intent intent=new Intent(OnboardingActivity.this,MainActivityNGO.class);
                           startActivity(intent);
                       }
                       else if(Role.equals("School Leader"))
                       {
                           Intent intent=new Intent(OnboardingActivity.this,MainActivityLeader.class);
                           startActivity(intent);
                       }
                       else{
                           Toast.makeText(OnboardingActivity.this,Role,Toast.LENGTH_SHORT).show();
                       }

                    }

                    @Override
                    public void onCancelled(@NonNull DatabaseError error) {

                    }
                });



            }
        });
    }
}