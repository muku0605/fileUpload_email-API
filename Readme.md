### express-fileupload package for file upload in node js

setup middleware
app.use(fileUpload());

const productImage = req.files.image;

### cloudinary

It enables users to upload, store, manage, manipulate, and deliver images and video for websites and apps.

install cloudinary package.

npm i cloudinary

use v2 for require
const cloudinary=require('cloudinary').v2;

### send Email

#nodemailer
npm i nodemailer

https://ethereal.email/create

### ethernal is a fake SMTP service.

### sendgrid SMTP for actual one

EMail setup
then go to Email APi and set integration guide

npm install --save @sendgrid/mail
