package com.example.firebasestarter;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentPagerAdapter;


public class FragmentAdapter extends FragmentPagerAdapter {

    public FragmentAdapter(@NonNull FragmentManager fm) {
        super(fm);
    }


    @NonNull
    @Override
    public Fragment getItem(int position) {
        switch (position){
            case 0: return new com.example.firebasestarter.NotificationFrag();
            case 1: return new com.example.firebasestarter.RequestFrag();
            default: return new com.example.firebasestarter.NotificationFrag();
        }

    }

    @Override
    public int getCount() {
        return 2;
    }

    @Nullable
    @Override
    public CharSequence getPageTitle(int position) {
        String title = null;
        if(position == 0)
        {
            title = "Notification";
        }
        else if(position == 1)
        {
            title = "Requests";
        }
        return title;
    }
}
