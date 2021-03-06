BEGIN TRANSACTION;
CREATE TABLE "music_song_artists" ("id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, "song_id" integer NOT NULL REFERENCES "music_song" ("id"), "artist_id" integer NOT NULL REFERENCES "music_artist" ("id"));
INSERT INTO `music_song_artists` VALUES (1,1,1);
INSERT INTO `music_song_artists` VALUES (2,2,1);
INSERT INTO `music_song_artists` VALUES (3,3,2);
INSERT INTO `music_song_artists` VALUES (4,4,2);
INSERT INTO `music_song_artists` VALUES (5,5,3);
INSERT INTO `music_song_artists` VALUES (6,6,3);
INSERT INTO `music_song_artists` VALUES (7,7,1);
INSERT INTO `music_song_artists` VALUES (8,7,2);
INSERT INTO `music_song_artists` VALUES (9,8,2);
INSERT INTO `music_song_artists` VALUES (10,8,3);
CREATE TABLE "music_song" ("id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, "name" varchar(75) NOT NULL, "lengthSeconds" integer NOT NULL);
INSERT INTO `music_song` VALUES (1,'for those about to rock',400);
INSERT INTO `music_song` VALUES (2,'dirty deeds',300);
INSERT INTO `music_song` VALUES (3,'stairway to heaven',600);
INSERT INTO `music_song` VALUES (4,'black dog',300);
INSERT INTO `music_song` VALUES (5,'hot stuff',300);
INSERT INTO `music_song` VALUES (6,'last dance',180);
INSERT INTO `music_song` VALUES (7,'highway to heaven',666);
INSERT INTO `music_song` VALUES (8,'hot dog',120);
CREATE TABLE "music_artist" ("id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, "name" varchar(75) NOT NULL);
INSERT INTO `music_artist` VALUES (1,'acdc');
INSERT INTO `music_artist` VALUES (2,'led zeppelin');
INSERT INTO `music_artist` VALUES (3,'donna summers');
CREATE TABLE "music_album_songs" ("id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, "album_id" integer NOT NULL REFERENCES "music_album" ("id"), "song_id" integer NOT NULL REFERENCES "music_song" ("id"));
INSERT INTO `music_album_songs` VALUES (1,1,1);
INSERT INTO `music_album_songs` VALUES (2,1,2);
INSERT INTO `music_album_songs` VALUES (3,2,3);
INSERT INTO `music_album_songs` VALUES (4,2,4);
INSERT INTO `music_album_songs` VALUES (5,3,5);
INSERT INTO `music_album_songs` VALUES (6,3,6);
CREATE TABLE "music_album" ("id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, "name" varchar(75) NOT NULL);
INSERT INTO `music_album` VALUES (1,'acdc''s greatest hits');
INSERT INTO `music_album` VALUES (2,'led zeppelin IV');
INSERT INTO `music_album` VALUES (3,'donna summers disco classics');
CREATE UNIQUE INDEX "music_song_artists_song_id_1c817749_uniq" ON "music_song_artists" ("song_id", "artist_id");
CREATE INDEX "music_song_artists_e5c27d73" ON "music_song_artists" ("song_id");
CREATE INDEX "music_song_artists_ca949605" ON "music_song_artists" ("artist_id");
CREATE INDEX "music_album_songs_e5c27d73" ON "music_album_songs" ("song_id");
CREATE UNIQUE INDEX "music_album_songs_album_id_59bd96f7_uniq" ON "music_album_songs" ("album_id", "song_id");
CREATE INDEX "music_album_songs_95c3b9df" ON "music_album_songs" ("album_id");
CREATE INDEX "django_session_de54fa62" ON "django_session" ("expire_date");
CREATE UNIQUE INDEX "django_content_type_app_label_76bd3d3b_uniq" ON "django_content_type" ("app_label", "model");
CREATE INDEX "django_admin_log_e8701ad4" ON "django_admin_log" ("user_id");
CREATE INDEX "django_admin_log_417f1b1c" ON "django_admin_log" ("content_type_id");
CREATE UNIQUE INDEX "auth_user_user_permissions_user_id_14a6b632_uniq" ON "auth_user_user_permissions" ("user_id", "permission_id");
CREATE INDEX "auth_user_user_permissions_e8701ad4" ON "auth_user_user_permissions" ("user_id");
CREATE INDEX "auth_user_user_permissions_8373b171" ON "auth_user_user_permissions" ("permission_id");
CREATE UNIQUE INDEX "auth_user_groups_user_id_94350c0c_uniq" ON "auth_user_groups" ("user_id", "group_id");
CREATE INDEX "auth_user_groups_e8701ad4" ON "auth_user_groups" ("user_id");
CREATE INDEX "auth_user_groups_0e939a4f" ON "auth_user_groups" ("group_id");
CREATE UNIQUE INDEX "auth_permission_content_type_id_01ab375a_uniq" ON "auth_permission" ("content_type_id", "codename");
CREATE INDEX "auth_permission_417f1b1c" ON "auth_permission" ("content_type_id");
CREATE UNIQUE INDEX "auth_group_permissions_group_id_0cd325b0_uniq" ON "auth_group_permissions" ("group_id", "permission_id");
CREATE INDEX "auth_group_permissions_8373b171" ON "auth_group_permissions" ("permission_id");
CREATE INDEX "auth_group_permissions_0e939a4f" ON "auth_group_permissions" ("group_id");
COMMIT;
