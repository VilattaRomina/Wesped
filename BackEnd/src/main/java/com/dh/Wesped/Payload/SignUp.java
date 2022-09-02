package com.dh.Wesped.Payload;

import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;

@Getter
@Setter
public class SignUp {

    @NonNull
    private String name;
    @NonNull
    private String surname;
    @NonNull
    private String email;
    @NonNull
    private String password;
}
