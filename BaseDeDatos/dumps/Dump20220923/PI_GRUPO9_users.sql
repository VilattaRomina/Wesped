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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `surname` varchar(100) NOT NULL,
  `email` varchar(225) NOT NULL,
  `password` varchar(255) NOT NULL,
  `city` varchar(50) NOT NULL,
  `roles_id` int NOT NULL,
  PRIMARY KEY (`id`,`roles_id`),
  KEY `fk_users_roles1_idx` (`roles_id`),
  CONSTRAINT `fk_users_roles1` FOREIGN KEY (`roles_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Admin-Test','Admin-Test','admin-test@wesped.com','$2a$10$eHMNnafRHY1nxAJEngfayu.zatLlTO40G5OWpNdFwjpXkPapFoIo2','',1),(2,'User-Test','User-Test','user-test@wesped.com','$2a$10$xtdDNk5cu6sPiZyHyLTdhulN/s27XvhW/AKfljZOATTOYJg1yWkZy','',2),(3,'Romina','Villata','romi@gmail.com','$2a$10$FyL/iC8wt6lDFUxGRe4Gaes/MnfMK/DRnvWOEA4Ip42KNSOgtEedK','',2),(5,'Ana','Rodríguez','arogz@gmail.com','$2a$10$Dio.ytxhznvV8FpaursTbOu80zSL9nd4EX1h09hVU6HnvM6Kdq7G6','',2),(6,'Jarwadi','Saputra','jarsap@gmail.com','$2a$10$rbFZPGdYdfCAZjEpmn8h2egLeUc/cvJUqsPptjADrKYmpOOrHFYNW','',2),(7,'5vsd','rvad','r@gmail.com','$2a$10$k2QX25bF6V9u.Zku4ina..dMXXqIStgvWFnU9S58nbEmKoQLqOpv2','',2),(8,'5184151','74594','rret@gmail.com','$2a$10$h67bX/MHiGcwv97JzUr1eeKSbp/zPvJryv.NByUMjSiid4NHzWsXq','',2),(9,'carlos','prieto','carlosp@email.com','$2a$10$XhpfZ6Kp0eZXJT.0LsSVu.crgOLgveEKxTCmvZQRsy0k8pvNRxcBq','',2),(10,'Juan','Basualdo','juanb@gmail.com','$2a$10$0y0nvFRFzkNwWP2OjEG/LucKG4IsaBoutq1ZW08on57dPa3Oqx6uq','',2),(11,'Rocio','Piazze','rociopiazze@gmail.com','$2a$10$3YDFksNlmTiEFCA2dU/2VO1aHeyl6vcoF1GzZHdFHyahK/rrC.7mC','',2),(12,'lina','porras','linita@email.com','$2a$10$qVfki8TX08tVfs12EFJSo.yTrdfYGl0nD4MsO9Pt/xEij9krq.HIS','',2),(13,'Diego','Testa','redman1236@gmail.com','$2a$10$ujhxuJGH/ED0M/YnmSiIp.2RsETwF4kqnZAQc5qSM9Ol3gt8MvfFi','',2),(14,'asd','asd','asd@asd.com','$2a$10$ajwPoI39XJkkZxT7e1mNEuiVRy4uN2Ku0cT0AElZF36ktJJdhC9sW','',2),(15,'Rocio','Rocio','rocio@gmail.com','$2a$10$lxL5w6rDk2rDYSgdbhexOeBTge38xfWtpo.ivUL5zxN50sgZ.NpLm','',2),(16,'Romi','Villata','romiv@gmail.com','$2a$10$27kcR.brp4pRxK7LqMhDD.pgQFSg0fQEOoaarwm4JeDZfJ4dVtuLa','',2),(17,'prueba','jajaja','pruebajajaja@mail.com','$2a$10$pqOIQ.TEVojBtt2LtV7R6u0mArm3nEuj5ViUz3jgd10OyAwzlCQ1G','',2),(18,'Alejandra','Marin','maialemarin@gmail.com','$2a$10$L6EFeZvf4cctrMdpLPnVpuvJlv/zT1yWvpEao63G6rNoYy30rCdn2','',2),(19,'Seba','Basualdo','seba@gmail.com','$2a$10$T3RR7iqT0gJnAMYlN6AE2.jtolL95/EMimg1kV2xpXdhvHwDAQ3u.','',2),(20,'juan','villatta','juanvi@gmail.com','$2a$10$dmyzBgwsslesyoIC74TqdOFXZ7T2THD67vhjNWaZsS5Yi..sRpuM.','',2),(21,'seb','basu','sebasu@gmail.com','$2a$10$YpVVuYBgUK6TSPmhrJYe9uqpZiVpgGuBVdT9CONYjZ9SsYnl12NHK','',2),(22,'Juan','Basu','accenture.basualdo@gmail.com','$2a$10$7FgvI1lif/GSq4Q3rCgqG.ydPMSvBySv6PXccWoh0acsT92oJu2JO','',2),(23,'da','da','daniel.villajuan@bigbox.com.ar','$2a$10$CkeszA2eCk2COKt55.xdyOMfFA2g9.uqALk7wTMHCanzGiXkxOgF.','',2),(24,'test','test','testing@testing.com','$2a$10$9nOgi1Y79dt9vJs9jTSP6e94tIeFgJLsgWDPA4IyUVrhgl0YmWWx2','',2),(25,'Diego','Testa','clientewesped@gmail.com','$2a$10$0mjQyaV4I/n2vOwxeld/sOIF0NLZsXoIaQK8WAKBEOARQfaap/L6.','',2),(26,'Deigo','Testa','diego.testa@digitalhouse.com','$2a$10$KcuXPvYWRh/4jMKZsFxyjOIIK3VqJ5ZuAR2tnlTPcO8sa2Ekz1yee','',2),(27,'Romina','Vilatta','vilattaromina@gmail.com','$2a$10$69dGAmC1fPfUDKl7pI37Uen1KMjBsu7JU0wJjoR.WDzeaHZITwCUW','',2),(28,'Juan','Basu','frxxcko@gmail.com','$2a$10$FTk43nwX8L.bSa65u7DrzeRTeqw78HI8Yk2Fc9g8gBGk6hvW7LVGi','',2);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
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

-- Dump completed on 2022-09-23 15:21:17
