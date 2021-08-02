package com.example.firebasestarter.fragments;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ListView;

import androidx.annotation.NonNull;
import androidx.fragment.app.Fragment;

import com.example.firebasestarter.R;
import com.example.firebasestarter.Adapters.AssignAdapter;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.firestore.DocumentSnapshot;
import com.google.firebase.firestore.FirebaseFirestore;

import java.util.ArrayList;

public class VideoFragment extends Fragment {

    private String courseId;
    private ListView listView;
    private ArrayList<String> links;
    private FirebaseFirestore mFirestore;
    private FirebaseAuth mAuth;

    public static com.example.firebasestarter.fragments.VideoFragment getInstance(String courseId) {
        com.example.firebasestarter.fragments.VideoFragment fragment = new com.example.firebasestarter.fragments.VideoFragment();
        Bundle args = new Bundle();
        args.putString("courseId", courseId);
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (getArguments() != null) {
            courseId = getArguments().getString("courseId");
        }
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        mFirestore = FirebaseFirestore.getInstance();
        mAuth = FirebaseAuth.getInstance();
        View view = inflater.inflate(R.layout.fragment_video, container, false);
        listView = view.findViewById(R.id.listAss);
        links = new ArrayList<>();
        mFirestore.collection("Courses").document(courseId).get().addOnCompleteListener(new OnCompleteListener<DocumentSnapshot>() {
            @Override
            public void onComplete(@NonNull Task<DocumentSnapshot> task) {
                if (task.isSuccessful()) {
                    DocumentSnapshot doc = task.getResult();
                    links = (ArrayList<String>) doc.get("videos");
                    AssignAdapter assignAdapter = new AssignAdapter(getContext(),links,"Video",courseId,mAuth.getUid());
                    listView.setAdapter(assignAdapter);
                    assignAdapter.notifyDataSetChanged();
                }
            }
        });
        return view;
    }
}