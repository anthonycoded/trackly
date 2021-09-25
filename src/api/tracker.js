import axios from "axios";

export default axios.create({
  baseURL: "http://e2d8-2603-9001-6000-a610-9d2b-a157-3e63-f314.ngrok.io",
  headers: {
    Authorization:
      "Bearer OsMWDYqNZgc4rNIzaBuQwMEt8OhsKziNRav7-dli7JKKPtyu6pp1Xxo_MNbvwoH6xGoBGrMqlW4tLe_7HLdjweVWKRZ5FcGOMYOA-RzT1blZaLyy10s-Vi89guuZX3Yx",
    "x-requested-with": "xmlhttprequest",
    "Access-Control-Allow-Origin": "*",
  },
});
