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
-- Table structure for table `product_has_features`
--

DROP TABLE IF EXISTS `product_has_features`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_has_features` (
  `product_id` int NOT NULL,
  `features_id` int NOT NULL,
  PRIMARY KEY (`product_id`,`features_id`),
  KEY `fk_product_has_features_features1_idx` (`features_id`),
  KEY `fk_product_has_features_product1_idx` (`product_id`),
  CONSTRAINT `fk_product_has_features_features1` FOREIGN KEY (`features_id`) REFERENCES `features` (`id`),
  CONSTRAINT `fk_product_has_features_product1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_has_features`
--

LOCK TABLES `product_has_features` WRITE;
/*!40000 ALTER TABLE `product_has_features` DISABLE KEYS */;
INSERT INTO `product_has_features` VALUES (1,1),(4,1),(5,1),(6,1),(7,1),(9,1),(10,1),(11,1),(12,1),(13,1),(14,1),(15,1),(17,1),(18,1),(19,1),(1,2),(2,2),(6,2),(8,2),(12,2),(14,2),(16,2),(17,2),(4,3),(7,3),(10,3),(13,3),(2,4),(3,4),(8,4),(18,4),(3,5),(5,5),(7,5),(10,5),(11,5),(13,5),(15,5),(16,5),(17,5),(19,5),(1,6),(2,6),(3,6),(4,6),(6,6),(8,6),(9,6),(11,6),(14,6),(16,6),(18,6),(19,6),(5,7),(9,7),(12,7),(15,7);
/*!40000 ALTER TABLE `product_has_features` ENABLE KEYS */;
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

-- Dump completed on 2022-09-23 15:21:33
