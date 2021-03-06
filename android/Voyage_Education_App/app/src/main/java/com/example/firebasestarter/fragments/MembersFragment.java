package com.example.firebasestarter.fragments;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import android.widget.ListView;
import android.widget.ProgressBar;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.fragment.app.Fragment;

import com.example.firebasestarter.R;
import com.example.firebasestarter.Adapters.MemberAdapter;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.firestore.DocumentSnapshot;
import com.google.firebase.firestore.FirebaseFirestore;
import com.google.firebase.firestore.QueryDocumentSnapshot;
import com.google.firebase.firestore.QuerySnapshot;

import java.util.ArrayList;

public class MembersFragment extends Fragment {
    private String courseId;
    private FirebaseFirestore mFirestore;
    private String teacherID;
    private String teacher;
    private String assistantID;
    private String assistant;
    private ArrayList<String> studentsID;
    private ArrayList<String> students;
    private TextView teacherText;
    private TextView assistantText;
    private LinearLayout linearLayout;
    private ProgressBar progressBar;
    private ListView studentText;

    public static com.example.firebasestarter.fragments.MembersFragment getInstance(String courseId) {
        com.example.firebasestarter.fragments.MembersFragment fragment = new com.example.firebasestarter.fragments.MembersFragment();
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
        View view = inflater.inflate(R.layout.fragment_members, container, false);
        initView(view);
        linearLayout.setVisibility(View.GONE);
        // Inflate the layout for this fragment
        mFirestore = FirebaseFirestore.getInstance();
        mFirestore.collection("Courses").document(courseId).get().addOnCompleteListener(new OnCompleteListener<DocumentSnapshot>() {
            @Override
            public void onComplete(@NonNull Task<DocumentSnapshot> task) {
                if (task.isSuccessful()) {
                    DocumentSnapshot doc = task.getResult();
                    teacherID = doc.getString("teacher");
//                    assistantID = doc.getString("assistant");
                    studentsID = (ArrayList<String>) doc.get("students");
                    System.out.println(teacherID);
                    mFirestore.collection("Users").get().addOnCompleteListener(new OnCompleteListener<QuerySnapshot>() {
                        @Override
                        public void onComplete(@NonNull Task<QuerySnapshot> task) {
                            if (task.isSuccessful()) {
                                for (QueryDocumentSnapshot document : task.getResult()) {
                                    if(document.getId().equals(teacherID)) {
                                        teacher = document.getString("uname");
                                        teacherText.setText(teacher);
                                    }
                                    if(studentsID.contains(document.getId())) {
                                        students.add(document.getString("uname"));
                                    }
                                }
                                MemberAdapter memberAdapter = new MemberAdapter(getContext(),students);
                                studentText.setAdapter(memberAdapter);
                                memberAdapter.notifyDataSetChanged();
                                progressBar.setVisibility(View.GONE);
                                linearLayout.setVisibility(View.VISIBLE);
                            }
                        }
                    });

                }
            }
        });
        return view;
    }

    private void initView(View view) {
        teacherText = view.findViewById(R.id.teacher);
        studentText = view.findViewById(R.id.listView);
        progressBar = view.findViewById(R.id.progress);
        linearLayout = view.findViewById(R.id.done);
        studentsID = new ArrayList<>();
        students = new ArrayList<>();
    }
}