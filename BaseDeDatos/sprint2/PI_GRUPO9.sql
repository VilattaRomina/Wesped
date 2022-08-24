-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema pi_grupo9
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `pi_grupo9` DEFAULT CHARACTER SET utf8mb3 ;
USE `pi_grupo9` ;

-- -----------------------------------------------------
-- Table `pi_grupo9`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pi_grupo9`.`categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(50) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `urlImage` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `pi_grupo9`.`cities`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pi_grupo9`.`cities` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `country` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `pi_grupo9`.`features`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pi_grupo9`.`features` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(50) NOT NULL,
  `icon` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `pi_grupo9`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pi_grupo9`.`product` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(50) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `longitude` DOUBLE NULL DEFAULT NULL,
  `latitude` DOUBLE NULL DEFAULT NULL,
  `rating` DOUBLE NOT NULL,
  `availability` TINYINT NOT NULL,
  `cities_id` INT NOT NULL,
  `categories_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_product_cities1_idx` (`cities_id` ASC) VISIBLE,
  INDEX `fk_product_categories1_idx` (`categories_id` ASC) VISIBLE,
  CONSTRAINT `fk_product_categories1`
    FOREIGN KEY (`categories_id`)
    REFERENCES `pi_grupo9`.`categories` (`id`),
  CONSTRAINT `fk_product_cities1`
    FOREIGN KEY (`cities_id`)
    REFERENCES `pi_grupo9`.`cities` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `pi_grupo9`.`images`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pi_grupo9`.`images` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(50) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `urlImage` VARCHAR(255) NOT NULL,
  `product_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_images_product1_idx` (`product_id` ASC) VISIBLE,
  CONSTRAINT `fk_images_product1`
    FOREIGN KEY (`product_id`)
    REFERENCES `pi_grupo9`.`product` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `pi_grupo9`.`policy`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pi_grupo9`.`policy` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(50) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `pi_grupo9`.`product_has_features`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pi_grupo9`.`product_has_features` (
  `product_id` INT NOT NULL,
  `features_id` INT NOT NULL,
  PRIMARY KEY (`product_id`, `features_id`),
  INDEX `fk_product_has_features_features1_idx` (`features_id` ASC) VISIBLE,
  INDEX `fk_product_has_features_product1_idx` (`product_id` ASC) VISIBLE,
  CONSTRAINT `fk_product_has_features_features1`
    FOREIGN KEY (`features_id`)
    REFERENCES `pi_grupo9`.`features` (`id`),
  CONSTRAINT `fk_product_has_features_product1`
    FOREIGN KEY (`product_id`)
    REFERENCES `pi_grupo9`.`product` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `pi_grupo9`.`product_has_policy`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pi_grupo9`.`product_has_policy` (
  `product_id` INT NOT NULL,
  `policy_id` INT NOT NULL,
  PRIMARY KEY (`product_id`, `policy_id`),
  INDEX `fk_product_has_policy_policy1_idx` (`policy_id` ASC) VISIBLE,
  INDEX `fk_product_has_policy_product1_idx` (`product_id` ASC) VISIBLE,
  CONSTRAINT `fk_product_has_policy_policy1`
    FOREIGN KEY (`policy_id`)
    REFERENCES `pi_grupo9`.`policy` (`id`),
  CONSTRAINT `fk_product_has_policy_product1`
    FOREIGN KEY (`product_id`)
    REFERENCES `pi_grupo9`.`product` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
