// js/auth.js
import { auth, db } from "./firebase.js";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

import { ref, set } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

// Helper to get human-readable error messages
function getAuthErrorMessage(errorCode) {
  switch (errorCode) {
    case 'auth/invalid-credential':
    case 'auth/wrong-password':
    case 'auth/user-not-found':
      return "The email or password you entered is incorrect. Please check your credentials and try again.";
    case 'auth/user-disabled':
      return "This account has been temporarily disabled. Please contact support.";
    case 'auth/too-many-requests':
      return "Too many unsuccessful login attempts. Please try again later.";
    case 'auth/network-request-failed':
      return "Network error. Please check your internet connection and try again.";
    case 'auth/invalid-email':
      return "The email address is improperly formatted.";
    default:
      return "An unexpected error occurred. Please try again.";
  }
}

/* ================= FARMER ================= */

// FARMER SIGNUP
export function farmerSignup(email, password, { name, Location, mobile, city}) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {

      return set(ref(db, "farmers/" + cred.user.uid), {
        
        email: email,
        role: "farmer",
        name: name,
        Location:Location,
        mobile: mobile,
        city: city
      });
    })
    .then(() => {
      return signOut(auth).then(() => {
        Swal.fire({
          title: "Success",
          text: "Farmer registered successfully",
          icon: "success",
          timer: 2000,
          showConfirmButton: false
        }).then(() => {
          window.location.href = "farmer-login.html";
        });
      });
    })
    .catch((err) => {
      if (err.code === "auth/email-already-in-use") {
        Swal.fire({
          title: "Account Exists",
          text: "You already have an account! Switching to login...",
          icon: "info",
          timer: 2500,
          showConfirmButton: false
        }).then(() => {
          window.location.href = "farmer-login.html";
        });
      } else {
        Swal.fire("Registration Error", err.message, "error");
      }
    });
}

// FARMER LOGIN
export function farmerLogin(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      localStorage.setItem("farmerId", cred.user.uid);
      window.location.href = "farmer-dashboard.html";
    })
    .catch(err => Swal.fire("Login Failed", getAuthErrorMessage(err.code), "error"));
}

/* ================= BUYER ================= */

// BUYER SIGNUP
export function buyerSignup(email, password, { name, address, mobile}) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      return set(ref(db, "buyers/" + cred.user.uid), {
        
        email: email,
        role: "buyer",
        name: name,
        address: address,
        mobile: mobile
      });
    })
    .then(() => {
      return signOut(auth).then(() => {
        Swal.fire({
          title: "Success",
          text: "Buyer registered successfully",
          icon: "success",
          timer: 2000,
          showConfirmButton: false
        }).then(() => {
          window.location.href = "buyer-login.html";
        });
      });
    })
    .catch((err) => {
      if (err.code === "auth/email-already-in-use") {
        Swal.fire({
          title: "Account Exists",
          text: "You already have an account! Switching to login...",
          icon: "info",
          timer: 2500,
          showConfirmButton: false
        }).then(() => {
          window.location.href = "buyer-login.html";
        });
      } else {
        Swal.fire("Registration Error", err.message, "error");
      }
    });
}

// BUYER LOGIN
export function buyerLogin(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "buyer-dashboard.html";
    })
    .catch(err => Swal.fire("Login Failed", getAuthErrorMessage(err.code), "error"));
}