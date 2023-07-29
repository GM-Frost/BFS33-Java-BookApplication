package com.takeo.bookstore.validation;

public class UserRegisterValidation {

	private boolean exists;
	
	public UserRegisterValidation(boolean exists) {
        this.exists = exists;
    }

    public boolean isExists() {
        return exists;
    }

    public void setExists(boolean exists) {
        this.exists = exists;
    }
}
