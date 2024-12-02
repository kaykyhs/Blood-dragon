CREATE DATABASE  IF NOT EXISTS `dragontatoo` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `dragontatoo`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: dragontatoo
-- ------------------------------------------------------
-- Server version	8.0.36

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

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post` (
  `data` date DEFAULT NULL,
  `horario` time DEFAULT NULL,
  `descricao` varchar(50) DEFAULT NULL,
  `hashtag` varchar(25) DEFAULT NULL,
  `id_post` int NOT NULL,
  `fk_Tatuador_id_tatuador` int DEFAULT NULL,
  `fk_Supply_id_supply` int DEFAULT NULL,
  PRIMARY KEY (`id_post`),
  KEY `FK_Post_2` (`fk_Tatuador_id_tatuador`),
  KEY `FK_Post_3` (`fk_Supply_id_supply`),
  CONSTRAINT `FK_Post_2` FOREIGN KEY (`fk_Tatuador_id_tatuador`) REFERENCES `tatuador` (`id_tatuador`) ON DELETE CASCADE,
  CONSTRAINT `FK_Post_3` FOREIGN KEY (`fk_Supply_id_supply`) REFERENCES `supply` (`id_supply`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES ('2024-11-10','12:00:00','Incredible blackwork!','#blackwork',1,1,1),('2024-11-11','13:30:00','Traditional tattoo art!','#traditionaltattoo',2,2,2),('2024-11-12','14:45:00','My first tattoo! ?','#newtattoo',3,3,3),('2024-11-13','15:00:00','Tattooed with passion.','#tattooedpassion',4,4,4),('2024-11-14','16:30:00','Floral tattoos are my favorite.','#floraltattoo',5,5,5),('2024-11-14','16:30:00','Floral tattoos are my favorite.','#floraltattoo',6,5,NULL),('2024-11-14','16:30:00','Floral tattoos are my favorite.','#floraltattoo',7,NULL,5);
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-25 21:43:01
