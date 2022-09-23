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
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `description` varchar(255) NOT NULL,
  `address` varchar(100) NOT NULL DEFAULT 'Missing address',
  `longitude` double DEFAULT NULL,
  `latitude` double DEFAULT NULL,
  `rating` double NOT NULL,
  `availability` tinyint NOT NULL,
  `cities_id` int NOT NULL,
  `categories_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_product_cities1_idx` (`cities_id`),
  KEY `fk_product_categories1_idx` (`categories_id`),
  CONSTRAINT `fk_product_categories1` FOREIGN KEY (`categories_id`) REFERENCES `categories` (`id`),
  CONSTRAINT `fk_product_cities1` FOREIGN KEY (`cities_id`) REFERENCES `cities` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'Holiday Express','Lorem ipsum dolor sit amet. Est explicabo voluptas et molestias deleniti qui minima porro est perspiciatis sapiente qui rerum omnis? Sed obcaecati mollitia et quia deleniti hic quisquam necessitatibus!','Missing address',-34.5978903381827,-58.371014549772056,5,1,1,1),(2,'Grand Hotel','Lorem ipsum dolor sit amet. Est explicabo voluptas et molestias deleniti qui minima porro est perspiciatis sapiente qui rerum omnis? Sed obcaecati mollitia et quia deleniti hic quisquam necessitatibus!','Missing address',-41.13317700403088,-71.30674827744254,4.3,1,2,1),(3,'Plaza','Lorem ipsum dolor sit amet. Est explicabo voluptas et molestias deleniti qui minima porro est perspiciatis sapiente qui rerum omnis? Sed obcaecati mollitia et quia deleniti hic quisquam necessitatibus!','Missing address',-31.420645235586406,-64.18736939199188,4.5,1,4,1),(4,'Hotel Central','Lorem ipsum dolor sit amet. Est explicabo voluptas et molestias deleniti qui minima porro est perspiciatis sapiente qui rerum omnis? Sed obcaecati mollitia et quia deleniti hic quisquam necessitatibus!','Missing address',-32.876610312323514,-68.8494516973713,4,1,3,1),(5,'Pigmalion Hotel','Lorem ipsum dolor sit amet. Est explicabo voluptas et molestias deleniti qui minima porro est perspiciatis sapiente qui rerum omnis? Sed obcaecati mollitia et quia deleniti hic quisquam necessitatibus!','Missing address',-34.58566937393639,-58.387990979673894,3.9,1,1,1),(6,'Hostal Manzanares','Lorem ipsum dolor sit amet. Est explicabo voluptas et molestias deleniti qui minima porro est perspiciatis sapiente qui rerum omnis? Sed obcaecati mollitia et quia deleniti hic quisquam necessitatibus!','Missing address',-34.6202613104774,-58.37502113148668,4.5,1,1,2),(7,'Hostel Tres Hermanos','Lorem ipsum dolor sit amet. Est explicabo voluptas et molestias deleniti qui minima porro est perspiciatis sapiente qui rerum omnis? Sed obcaecati mollitia et quia deleniti hic quisquam necessitatibus!','Missing address',-41.136721523056536,-71.31214780511011,5,1,2,2),(8,'Villa Verde','Lorem ipsum dolor sit amet. Est explicabo voluptas et molestias deleniti qui minima porro est perspiciatis sapiente qui rerum omnis? Sed obcaecati mollitia et quia deleniti hic quisquam necessitatibus!','Missing address',-32.87964464121688,-68.85470876583913,3.8,1,3,2),(9,'Refugio Hostel','Lorem ipsum dolor sit amet. Est explicabo voluptas et molestias deleniti qui minima porro est perspiciatis sapiente qui rerum omnis? Sed obcaecati mollitia et quia deleniti hic quisquam necessitatibus!','Missing address',-31.4095045184301,-64.18611695003233,4.7,1,4,2),(10,'Golden Hostel','Lorem ipsum dolor sit amet. Est explicabo voluptas et molestias deleniti qui minima porro est perspiciatis sapiente qui rerum omnis? Sed obcaecati mollitia et quia deleniti hic quisquam necessitatibus!','Missing address',-34.61725051907827,-58.370525749173325,3.6,1,1,2),(11,'Departamentos Lux','Lorem ipsum dolor sit amet. Est explicabo voluptas et molestias deleniti qui minima porro est perspiciatis sapiente qui rerum omnis? Sed obcaecati mollitia et quia deleniti hic quisquam necessitatibus!','Missing address',-34.58583637424699,-58.41225854863785,4.8,1,1,3),(12,'Residencias Ávila','Lorem ipsum dolor sit amet. Est explicabo voluptas et molestias deleniti qui minima porro est perspiciatis sapiente qui rerum omnis? Sed obcaecati mollitia et quia deleniti hic quisquam necessitatibus!','Missing address',-41.13790014374107,-71.2972011764508,3.8,1,2,3),(13,'Condominios King','Lorem ipsum dolor sit amet. Est explicabo voluptas et molestias deleniti qui minima porro est perspiciatis sapiente qui rerum omnis? Sed obcaecati mollitia et quia deleniti hic quisquam necessitatibus!','Missing address',-32.892145112623574,-68.85456952988149,4.2,1,3,3),(14,'Turmalinas','Lorem ipsum dolor sit amet. Est explicabo voluptas et molestias deleniti qui minima porro est perspiciatis sapiente qui rerum omnis? Sed obcaecati mollitia et quia deleniti hic quisquam necessitatibus!','Missing address',-31.412217877689272,-64.18120352388337,5,1,4,3),(15,'Departamentos Casa Grande','Lorem ipsum dolor sit amet. Est explicabo voluptas et molestias deleniti qui minima porro est perspiciatis sapiente qui rerum omnis? Sed obcaecati mollitia et quia deleniti hic quisquam necessitatibus!','Missing address',-34.55165269397749,-58.461479324128454,4,1,1,3),(16,'Baires Bed and Breakfast','Lorem ipsum dolor sit amet. Est explicabo voluptas et molestias deleniti qui minima porro est perspiciatis sapiente qui rerum omnis? Sed obcaecati mollitia et quia deleniti hic quisquam necessitatibus!','Missing address',-34.589420321683896,-58.391189137491644,4.6,1,1,4),(17,'Querido Bed and Breakfast','Lorem ipsum dolor sit amet. Est explicabo voluptas et molestias deleniti qui minima porro est perspiciatis sapiente qui rerum omnis? Sed obcaecati mollitia et quia deleniti hic quisquam necessitatibus!','Missing address',-41.133811475410525,-71.29589079004533,3.8,1,2,4),(18,'B&B de la casa','Lorem ipsum dolor sit amet. Est explicabo voluptas et molestias deleniti qui minima porro est perspiciatis sapiente qui rerum omnis? Sed obcaecati mollitia et quia deleniti hic quisquam necessitatibus!','Missing address',-32.88989778851921,-68.84302309583546,5,1,3,4),(19,'Do Río, Bed and Breakfast','Lorem ipsum dolor sit amet. Est explicabo voluptas et molestias deleniti qui minima porro est perspiciatis sapiente qui rerum omnis? Sed obcaecati mollitia et quia deleniti hic quisquam necessitatibus!','Missing address',-31.42471476170252,-64.18351572442405,4.5,1,4,4);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
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

-- Dump completed on 2022-09-23 15:21:45
