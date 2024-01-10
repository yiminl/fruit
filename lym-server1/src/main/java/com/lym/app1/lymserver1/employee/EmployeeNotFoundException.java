package com.lym.app1.lymserver1.employee;

public class EmployeeNotFoundException extends RuntimeException {
    public EmployeeNotFoundException(Long id) {
        super("cannot find the employee " + id);
    }
}
