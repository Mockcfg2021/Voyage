package com.example.firebasestarter;

import androidx.appcompat.app.AppCompatActivity;
import androidx.core.content.ContextCompat;

import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.os.Message;
import android.view.animation.Animation;
import android.view.animation.AnimationUtils;
import android.widget.TextView;

import java.util.concurrent.Executor;

public class MainActivity extends AppCompatActivity {

    TextView welcome,ngoname;
    private static int splash_Time=5000;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        welcome=findViewById(R.id.textView1);
        ngoname=findViewById(R.id.textView2);


        new Handler(Looper.getMainLooper()).postDelayed(new Runnable() {
            @Override
            public void run() {
                Intent splashintent=new Intent(MainActivity.this,LoginActivity.class);
                startActivity(splashintent);
                finish();
            }
        }, splash_Time);

        Animation animation= AnimationUtils.loadAnimation(MainActivity.this,R.anim.animation2);
        welcome.startAnimation(animation);
        Animation animation2= AnimationUtils.loadAnimation(MainActivity.this,R.anim.animation1);
        ngoname.startAnimation(animation2);
    }
}