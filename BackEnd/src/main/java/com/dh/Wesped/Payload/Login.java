package com.dh.Wesped.Payload;

import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;

@Getter
@Setter
public class Login {

    @NonNull
    private String email;
    @NonNull
    private String password;
}