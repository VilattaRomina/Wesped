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

-- -----------------------------------------------------
-- Schema db_wesped
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `db_wesped` DEFAULT CHARACTER SET utf8mb3 ;
USE `db_wesped` ;

-- -----------------------------------------------------
-- Table `db_wesped`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_wesped`.`categories` (
  `id` INT NOT NULL,
  `title` VARCHAR(50) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `urlImage` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `db_wesped`.`cities`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_wesped`.`cities` (
  `id` INT NOT NULL,
  `name` VARCHAR(50) NOT NULL,
  `country` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `db_wesped`.`features`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_wesped`.`features` (
  `id` BIGINT NOT NULL,
  `title` VARCHAR(50) NOT NULL,
  `icon` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `db_wesped`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_wesped`.`product` (
  `id` BIGINT NOT NULL,
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
  CONSTRAINT `fk_product_cities1`
    FOREIGN KEY (`cities_id`)
    REFERENCES `db_wesped`.`cities` (`id`),
  CONSTRAINT `fk_product_categories1`
    FOREIGN KEY (`categories_id`)
    REFERENCES `db_wesped`.`categories` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `db_wesped`.`images`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_wesped`.`images` (
  `id` BIGINT NOT NULL,
  `title` VARCHAR(50) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `urlImage` VARCHAR(255) NOT NULL,
  `product_id` BIGINT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_images_product1_idx` (`product_id` ASC) VISIBLE,
  CONSTRAINT `fk_images_product1`
    FOREIGN KEY (`product_id`)
    REFERENCES `db_wesped`.`product` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `db_wesped`.`policy`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_wesped`.`policy` (
  `id` INT NOT NULL,
  `title` VARCHAR(50) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `db_wesped`.`product_has_features`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_wesped`.`product_has_features` (
  `product_id` BIGINT NOT NULL,
  `features_id` BIGINT NOT NULL,
  PRIMARY KEY (`product_id`, `features_id`),
  INDEX `fk_product_has_features_features1_idx` (`features_id` ASC) VISIBLE,
  INDEX `fk_product_has_features_product1_idx` (`product_id` ASC) VISIBLE,
  CONSTRAINT `fk_product_has_features_features1`
    FOREIGN KEY (`features_id`)
    REFERENCES `db_wesped`.`features` (`id`),
  CONSTRAINT `fk_product_has_features_product1`
    FOREIGN KEY (`product_id`)
    REFERENCES `db_wesped`.`product` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `db_wesped`.`product_has_policy`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_wesped`.`product_has_policy` (
  `product_id` BIGINT NOT NULL,
  `policy_id` INT NOT NULL,
  PRIMARY KEY (`product_id`, `policy_id`),
  INDEX `fk_product_has_policy_policy1_idx` (`policy_id` ASC) VISIBLE,
  INDEX `fk_product_has_policy_product1_idx` (`product_id` ASC) VISIBLE,
  CONSTRAINT `fk_product_has_policy_policy1`
    FOREIGN KEY (`policy_id`)
    REFERENCES `db_wesped`.`policy` (`id`),
  CONSTRAINT `fk_product_has_policy_product1`
    FOREIGN KEY (`product_id`)
    REFERENCES `db_wesped`.`product` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
