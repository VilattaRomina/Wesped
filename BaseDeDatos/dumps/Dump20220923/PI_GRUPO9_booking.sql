-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: db.ctd.academy    Database: PI_GRUPO9
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '';

--
-- Table structure for table `booking`
--

DROP TABLE IF EXISTS `booking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `booking` (
  `id` int NOT NULL AUTO_INCREMENT,
  `hour` time DEFAULT NULL,
  `checkin` date NOT NULL,
  `checkout` date NOT NULL,
  `observations` varchar(200) DEFAULT 'No Observations',
  `vaccineCovid19` tinyint DEFAULT '1',
  `product_id` int NOT NULL,
  `users_id` int NOT NULL,
  PRIMARY KEY (`id`,`product_id`,`users_id`),
  KEY `fk_booking_product_idx` (`product_id`),
  KEY `fk_booking_users1_idx` (`users_id`),
  CONSTRAINT `fk_booking_product` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`),
  CONSTRAINT `fk_booking_users1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=82 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking`
--

LOCK TABLES `booking` WRITE;
/*!40000 ALTER TABLE `booking` DISABLE KEYS */;
INSERT INTO `booking` VALUES (1,'10:30:00','2022-09-12','2022-09-16','No Observations',1,1,2),(2,'10:30:00','2022-09-19','2022-09-23','No Observations',1,5,2),(3,'10:30:00','2022-09-12','2022-09-16','No Observations',1,8,2),(4,'10:30:00','2022-09-26','2022-09-30','No Observations',1,10,2),(5,'10:30:00','2022-10-03','2022-10-07','No Observations',1,10,2),(6,'10:30:00','2022-09-12','2022-09-23','No Observations',1,15,2),(7,'10:30:00','2022-09-26','2022-09-30','No Observations',1,15,2),(8,'10:30:00','2022-10-10','2022-10-21','No Observations',1,15,2),(9,'10:30:00','2022-09-09','2022-09-12','No Observations',1,17,2),(10,'10:30:00','2022-09-16','2022-09-25','No Observations',1,19,2),(11,'12:26:30','2018-02-02','2018-02-05','No Observations',1,5,2),(12,'02:00:00','2022-09-01','2022-09-03','No Observations',1,1,2),(13,'16:00:00','2022-09-19','2022-09-23','No Observations',1,1,2),(14,'02:00:00','2022-10-25','2022-10-28','No Observations',1,1,2),(15,'02:00:00','2022-09-20','2022-09-23','No Observations',1,1,2),(16,'03:00:00','2022-09-13','2022-09-21','No Observations',1,1,2),(17,'10:30:00','2022-09-16','2022-09-19','No Observations',1,1,2),(18,'10:00:00','2022-09-12','2022-09-19','No Observations',1,2,2),(19,'02:00:00','2022-09-19','2022-09-22','No Observations',1,2,2),(20,'07:00:00','2022-09-08','2022-09-16','No Observations',1,1,2),(21,'13:00:00','2022-09-08','2022-09-24','No Observations',1,1,2),(22,'03:00:00','2022-09-08','2022-09-16','No Observations',1,1,2),(23,'12:00:00','2022-09-08','2022-09-16','No Observations',1,1,2),(24,'07:00:00','2022-09-08','2022-09-23','No Observations',1,1,2),(25,'06:00:00','2022-09-08','2022-09-16','No Observations',1,1,2),(26,'12:00:00','2022-09-08','2022-09-23','No Observations',1,5,2),(27,'00:00:00','2022-09-08','2022-09-16','No Observations',1,1,2),(28,'10:30:00','2022-09-16','2022-09-19','No Observations',1,3,2),(29,'11:00:00','2022-09-08','2022-09-16','No Observations',1,1,2),(30,'02:00:00','2022-09-08','2022-09-16','No Observations',1,1,2),(31,'14:00:00','2022-09-23','2022-09-30','No Observations',1,5,2),(32,'10:00:00','2022-09-08','2022-09-16','No Observations',1,1,2),(33,'12:26:30','2018-02-02','2018-02-05','No Observations',1,5,2),(34,'07:00:00','2022-09-19','2022-09-29','No Observations',1,1,2),(35,'05:00:00','2022-09-08','2022-09-16','No Observations',1,1,2),(36,'19:00:00','2022-10-12','2022-10-19','No Observations',1,2,2),(37,'05:00:00','2022-10-19','2022-10-27','No Observations',1,2,10),(38,'03:00:00','2022-09-20','2022-09-23','No Observations',1,1,10),(39,'03:00:00','2022-10-20','2022-10-27','No Observations',1,2,10),(40,'02:00:00','2022-09-13','2022-09-21','No Observations',1,12,10),(41,'01:00:00','2022-09-14','2022-09-21','No Observations',1,1,13),(42,'03:00:00','2022-09-23','2022-10-11','No Observations',1,1,15),(43,'10:00:00','2022-09-22','2022-09-24','No Observations',1,1,2),(44,'05:00:00','2022-10-11','2022-10-13','No Observations',1,1,2),(45,'03:00:00','2022-10-06','2022-10-08','No Observations',1,10,2),(46,'03:00:00','2022-09-27','2022-09-29','No Observations',1,13,2),(47,'07:00:00','2022-09-14','2022-09-22','No Observations',1,11,16),(48,'02:00:00','2022-10-18','2022-10-26','No Observations',1,3,10),(49,'04:00:00','2022-09-22','2022-09-29','No Observations',1,18,10),(50,'02:00:00','2022-09-17','2022-10-18','No Observations',1,1,17),(51,'03:00:00','2022-09-17','2022-09-30','No Observations',1,1,17),(52,'01:00:00','2022-10-19','2022-10-28','No Observations',1,2,10),(53,'01:00:00','2022-10-19','2022-10-27','No Observations',1,2,10),(54,'11:00:00','2022-11-07','2022-11-11','No Observations',1,8,18),(55,'05:00:00','2022-09-19','2022-09-29','No Observations',1,11,1),(56,'05:00:00','2022-09-19','2022-09-30','No Observations',1,11,1),(57,'10:00:00','2022-10-01','2022-10-05','No Observations',1,2,20),(58,'05:00:00','2022-09-26','2022-09-30','No Observations',1,10,10),(59,'05:00:00','2022-09-21','2022-09-30','No Observations',1,1,2),(60,'05:00:00','2022-09-21','2022-09-30','No Observations',1,18,2),(61,'03:00:00','2022-09-21','2022-09-23','No Observations',1,18,17),(62,'02:00:00','2022-09-23','2022-09-29','No Observations',1,1,17),(63,'01:00:00','2022-10-18','2022-10-26','No Observations',1,1,10),(64,'02:00:00','2022-10-26','2022-11-03','No Observations',1,2,10),(65,'05:00:00','2022-09-21','2022-09-30','No Observations',1,7,2),(66,'05:00:00','2022-09-21','2022-09-29','No Observations',1,1,2),(67,'05:00:00','2022-09-21','2022-09-29','No Observations',1,1,1),(68,'07:00:00','2022-09-21','2022-09-29','No Observations',1,1,1),(69,'10:00:00','2022-11-01','2022-11-05','No Observations',1,2,22),(70,'06:00:00','2022-09-21','2022-09-30','No Observations',1,12,1),(71,'06:00:00','2022-09-21','2022-09-30','No Observations',1,2,1),(72,'03:00:00','2022-10-18','2022-10-26','No Observations',1,1,10),(73,'02:00:00','2022-10-18','2022-10-26','No Observations',1,1,10),(74,'01:00:00','2022-10-11','2022-10-20','No Observations',1,4,10),(75,'03:00:00','2022-09-24','2022-10-17','No Observations',1,2,23),(76,'06:00:00','2022-09-23','2022-09-30','No Observations',1,1,24),(77,'01:00:00','2022-09-22','2022-09-29','No Observations',1,11,25),(78,'10:00:00','2022-10-10','2022-10-15','No Observations',1,2,25),(79,'03:00:00','2022-11-15','2022-11-24','No Observations',1,3,26),(80,'05:00:00','2022-11-16','2022-11-24','No Observations',1,9,24),(81,'10:00:00','2022-10-10','2022-10-15','No Observations',1,15,28);
/*!40000 ALTER TABLE `booking` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-23 15:21:20
