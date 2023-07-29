package com.takeo.bookstore.validation;

public class UserLoginResponse {
	 private boolean exists;

	    public UserLoginResponse(boolean exists) {
	        this.exists = exists;
	    }

	    public boolean isExists() {
	        return exists;
	    }

	    public void setExists(boolean exists) {
	        this.exists = exists;
	    }
	    
}
