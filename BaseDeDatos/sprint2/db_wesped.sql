-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema db_wesped
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema db_wesped
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `db_wesped` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema db_wesped
-- -----------------------------------------------------
USE `db_wesped` ;

-- -----------------------------------------------------
-- Table `db_wesped`.`cities`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_wesped`.`cities` (
  `id` INT NOT NULL,
  `name` VARCHAR(50) NOT NULL,
  `country` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_wesped`.`policy`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_wesped`.`policy` (
  `id` INT NOT NULL,
  `title` VARCHAR(50) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_wesped`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_wesped`.`product` (
  `id` BIGINT NOT NULL,
  `title` VARCHAR(50) NOT NULL,
  `location` VARCHAR(255) NOT NULL,
  `longitude` DOUBLE NULL,
  `latitude` DOUBLE NULL,
  `rating` DOUBLE NOT NULL,
  `availability` TINYINT NOT NULL,
  `cities_id` INT NOT NULL,
  `policy_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_product_cities1_idx` (`cities_id` ASC) VISIBLE,
  INDEX `fk_product_policy1_idx` (`policy_id` ASC) VISIBLE,
  CONSTRAINT `fk_product_cities1`
    FOREIGN KEY (`cities_id`)
    REFERENCES `db_wesped`.`cities` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_product_policy1`
    FOREIGN KEY (`policy_id`)
    REFERENCES `db_wesped`.`policy` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_wesped`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_wesped`.`categories` (
  `id` INT NOT NULL,
  `title` VARCHAR(50) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `urlImage` VARCHAR(255) NOT NULL,
  `product_id` BIGINT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_categories_product_idx` (`product_id` ASC) VISIBLE,
  CONSTRAINT `fk_categories_product`
    FOREIGN KEY (`product_id`)
    REFERENCES `db_wesped`.`product` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_wesped`.`images`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_wesped`.`images` (
  `id` BIGINT NOT NULL,
  `title` VARCHAR(50) NOT NULL,
  `description` VARCHAR(50) NOT NULL,
  `urlImage` VARCHAR(255) NOT NULL,
  `product_id` BIGINT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_images_product1_idx` (`product_id` ASC) VISIBLE,
  CONSTRAINT `fk_images_product1`
    FOREIGN KEY (`product_id`)
    REFERENCES `db_wesped`.`product` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_wesped`.`features`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_wesped`.`features` (
  `id` BIGINT NOT NULL,
  `title` VARCHAR(50) NOT NULL,
  `icon` VARCHAR(255) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_wesped`.`product_has_features`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_wesped`.`product_has_features` (
  `product_id` BIGINT NOT NULL,
  `features_id` BIGINT NOT NULL,
  PRIMARY KEY (`product_id`, `features_id`),
  INDEX `fk_product_has_features_features1_idx` (`features_id` ASC) VISIBLE,
  INDEX `fk_product_has_features_product1_idx` (`product_id` ASC) VISIBLE,
  CONSTRAINT `fk_product_has_features_product1`
    FOREIGN KEY (`product_id`)
    REFERENCES `db_wesped`.`product` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_product_has_features_features1`
    FOREIGN KEY (`features_id`)
    REFERENCES `db_wesped`.`features` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
