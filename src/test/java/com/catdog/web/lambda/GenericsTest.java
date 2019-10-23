package com.catdog.web.lambda;

public class GenericsTest {
	static class Box<T>{
		T item;
		void setItem(T item) {this.item = item;}
		T getItem() {return item;}
		
		
	}
	public static void main(String[] args) {
		GenericsTest s = new GenericsTest();
		GenericsTest.Box<String> s2 = new GenericsTest.Box<>();
		GenericsTest.Box<Integer> s3 = new GenericsTest.Box<>();
		
	}

}
