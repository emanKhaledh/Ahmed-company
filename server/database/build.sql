BEGIN;
DROP TABLE IF EXISTS admin,reports,generalization,achievements,advertising,budget,fileuplode,nameteach,radio,activity,activities;

CREATE TABLE "admin" (
  "id" serial NOT NULL,
	"name" varchar(30),
	"user_name" varchar(2000)  ,
  "email" varchar(9000)  ,
  "password" varchar(10),
  CONSTRAINT admin_pk PRIMARY KEY ("id")
);

CREATE TABLE "static" (
  "id" serial NOT NULL,
	"no_project" varchar(30),
	"no_project_don" date,
  "no_client" varchar(9000),
  "no_hours" varchar(10),
  CONSTRAINT static_pk PRIMARY KEY ("id")
);


CREATE TABLE "projects" (
  "id" serial NOT NULL,
	"img" varchar(9000),
  "titel" varchar(30),
	"description" varchar(2000)  ,
  "price" varchar(30)  ,
  CONSTRAINT projects_pk PRIMARY KEY ("id")
);
CREATE TABLE "companyinfo" (
  "id" serial NOT NULL,
	"email" varchar(200) ,
	"tel" varchar(200)  ,
  "instgram" varchar(200)  ,
  "facebook" varchar(200)  ,
  "twitter" varchar(200)  ,
  CONSTRAINT companyinfo_pk PRIMARY KEY ("id")
);
CREATE TABLE "ask" (
  "id" serial NOT NULL,
	"q" varchar(300) ,
	"answer" varchar(3000)  ,
  CONSTRAINT ask_pk PRIMARY KEY ("id")
);



COMMIT;
