/*
SQLyog Ultimate v12.09 (64 bit)
MySQL - 10.3.16-MariaDB : Database - flora
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`flora` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `flora`;

/*Table structure for table `bunchers` */

DROP TABLE IF EXISTS `bunchers`;

CREATE TABLE `bunchers` (
  `buncherid` int(11) NOT NULL AUTO_INCREMENT,
  `bunchername` int(11) DEFAULT NULL,
  PRIMARY KEY (`buncherid`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=latin1;

/*Data for the table `bunchers` */

insert  into `bunchers`(`buncherid`,`bunchername`) values (1,1),(2,2),(3,3),(4,4),(5,5),(6,6),(7,7),(8,8),(9,9),(10,10),(11,11),(12,12),(13,13),(14,14),(15,15),(16,16),(17,17),(18,18),(19,19),(20,20),(21,21),(22,22),(23,23),(24,24),(25,25);

/*Table structure for table `bunchingstyles` */

DROP TABLE IF EXISTS `bunchingstyles`;

CREATE TABLE `bunchingstyles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `quantity` int(11) DEFAULT NULL,
  `standard` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

/*Data for the table `bunchingstyles` */

insert  into `bunchingstyles`(`id`,`quantity`,`standard`) values (1,1,0),(2,2,0),(3,3,0),(4,4,0),(5,5,0),(6,6,0),(7,7,0),(8,8,0),(9,9,0),(10,10,1),(11,11,0),(12,12,0),(13,13,0),(14,14,0),(15,15,0),(16,16,0),(17,17,0),(18,18,0),(19,19,0),(20,20,0);

/*Table structure for table `coldrooms` */

DROP TABLE IF EXISTS `coldrooms`;

CREATE TABLE `coldrooms` (
  `coldroomid` int(11) NOT NULL AUTO_INCREMENT,
  `coldroomname` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`coldroomid`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

/*Data for the table `coldrooms` */

insert  into `coldrooms`(`coldroomid`,`coldroomname`) values (1,'Coldroom 1'),(2,'Coldroom 2');

/*Table structure for table `collection` */

DROP TABLE IF EXISTS `collection`;

CREATE TABLE `collection` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `datetime` datetime DEFAULT NULL,
  `coldroomid` int(11) DEFAULT NULL,
  `unitid` int(50) DEFAULT NULL,
  `varietyid` int(11) DEFAULT NULL,
  `stemlength` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `addedby` int(11) DEFAULT NULL,
  `driverid` int(11) DEFAULT NULL,
  `bucketcapacity` int(11) DEFAULT NULL,
  `fullbucket` tinyint(1) DEFAULT NULL,
  `pickingdate` datetime DEFAULT NULL,
  `deliverydate` datetime DEFAULT NULL,
  `tagid` int(11) DEFAULT NULL,
  `tagactive` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `coldroomid` (`coldroomid`),
  KEY `unitid` (`unitid`),
  KEY `varietyid` (`varietyid`),
  KEY `stemlength` (`stemlength`),
  KEY `addedby` (`addedby`),
  KEY `driverid` (`driverid`),
  KEY `tagid` (`tagid`),
  CONSTRAINT `collection_ibfk_1` FOREIGN KEY (`coldroomid`) REFERENCES `coldrooms` (`coldroomid`),
  CONSTRAINT `collection_ibfk_2` FOREIGN KEY (`unitid`) REFERENCES `units` (`unitid`),
  CONSTRAINT `collection_ibfk_3` FOREIGN KEY (`varietyid`) REFERENCES `varieties` (`id`),
  CONSTRAINT `collection_ibfk_4` FOREIGN KEY (`stemlength`) REFERENCES `stemlengths` (`stemlengthid`),
  CONSTRAINT `collection_ibfk_5` FOREIGN KEY (`addedby`) REFERENCES `users` (`userid`),
  CONSTRAINT `collection_ibfk_6` FOREIGN KEY (`driverid`) REFERENCES `users` (`userid`),
  CONSTRAINT `collection_ibfk_7` FOREIGN KEY (`tagid`) REFERENCES `tags` (`tagid`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=latin1;

/*Data for the table `collection` */

insert  into `collection`(`id`,`datetime`,`coldroomid`,`unitid`,`varietyid`,`stemlength`,`quantity`,`addedby`,`driverid`,`bucketcapacity`,`fullbucket`,`pickingdate`,`deliverydate`,`tagid`,`tagactive`) values (1,'2020-08-28 12:05:26',1,10,10,1,3,1,11,100,1,NULL,NULL,NULL,NULL),(2,'2020-08-28 12:05:26',1,10,10,1,67,1,11,0,0,NULL,NULL,NULL,NULL),(4,'2020-08-28 12:08:49',1,9,5,2,6,1,11,100,1,NULL,NULL,NULL,NULL),(5,'2020-08-28 12:08:49',1,9,5,2,74,1,11,0,0,NULL,NULL,NULL,NULL),(7,'2020-08-28 13:06:32',1,9,10,2,12,1,11,100,1,NULL,NULL,NULL,NULL),(8,'2020-08-28 13:06:32',1,9,10,2,104,1,11,0,0,NULL,NULL,NULL,NULL),(9,'2020-08-29 15:13:21',1,10,10,2,9,1,11,100,1,NULL,NULL,NULL,NULL),(10,'2020-08-29 15:13:21',1,10,10,2,23,1,11,0,0,NULL,NULL,NULL,NULL),(11,'2020-09-02 09:56:51',1,10,10,2,6,1,1,100,1,NULL,NULL,NULL,NULL),(12,'2020-09-02 09:56:51',1,10,10,2,69,1,1,0,0,NULL,NULL,NULL,NULL),(13,'2020-09-02 09:56:51',1,10,10,2,67,1,1,0,0,NULL,NULL,NULL,NULL),(14,'2020-09-02 10:04:42',1,10,10,4,8,1,1,100,1,NULL,NULL,NULL,NULL),(15,'2020-09-02 10:04:42',1,10,10,4,71,1,1,0,0,NULL,NULL,NULL,NULL),(17,'2020-09-02 10:36:28',1,10,10,2,8,1,1,100,1,NULL,NULL,NULL,NULL),(18,'2020-09-02 10:36:28',1,10,10,2,50,1,1,0,0,NULL,NULL,NULL,NULL),(19,'2020-09-04 12:29:59',1,10,10,2,5,1,11,100,1,'2020-09-04 10:17:00','2020-09-04 10:30:00',NULL,NULL),(20,'2020-09-04 12:29:59',1,10,10,2,66,1,11,0,0,'2020-09-04 10:17:00','2020-09-04 10:30:00',NULL,NULL),(22,'2020-09-04 12:37:23',1,10,10,2,10,1,11,100,1,'2020-09-04 09:15:00','2020-09-04 12:36:00',NULL,NULL),(23,'2020-09-04 12:37:23',1,10,10,2,70,1,11,0,0,'2020-09-04 09:15:00','2020-09-04 12:36:00',NULL,NULL),(24,'2020-09-10 05:48:58',1,10,10,3,4,1,1,100,1,'2020-09-10 05:48:00','2020-09-10 05:48:00',NULL,NULL),(25,'2020-09-10 05:48:58',1,10,10,3,63,1,1,0,0,'2020-09-10 05:48:00','2020-09-10 05:48:00',NULL,NULL),(26,'2020-09-15 19:07:04',1,10,10,4,1,1,1,100,1,'2020-09-15 18:52:00','2020-09-15 18:53:01',1,0),(28,'2020-09-16 09:22:27',1,9,5,1,65,1,11,0,0,'2020-09-16 09:22:00','2020-09-16 09:22:21',2,0),(29,'2020-09-16 09:47:11',1,8,9,3,45,1,11,0,0,'2020-09-16 09:46:00','2020-09-16 09:47:09',3,1);

/*Table structure for table `customerorderdetails` */

DROP TABLE IF EXISTS `customerorderdetails`;

CREATE TABLE `customerorderdetails` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `orderid` int(11) DEFAULT NULL,
  `varietyid` int(11) DEFAULT NULL,
  `stemlengthid` int(11) DEFAULT NULL,
  `headsizeid` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `orderid` (`orderid`),
  KEY `varietyid` (`varietyid`),
  KEY `stemlengid` (`stemlengthid`),
  KEY `headsizeid` (`headsizeid`),
  CONSTRAINT `customerorderdetails_ibfk_1` FOREIGN KEY (`orderid`) REFERENCES `customerorders` (`id`),
  CONSTRAINT `customerorderdetails_ibfk_2` FOREIGN KEY (`varietyid`) REFERENCES `varieties` (`id`),
  CONSTRAINT `customerorderdetails_ibfk_3` FOREIGN KEY (`stemlengthid`) REFERENCES `stemlengths` (`stemlengthid`),
  CONSTRAINT `customerorderdetails_ibfk_4` FOREIGN KEY (`headsizeid`) REFERENCES `headsizes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

/*Data for the table `customerorderdetails` */

insert  into `customerorderdetails`(`id`,`orderid`,`varietyid`,`stemlengthid`,`headsizeid`,`quantity`) values (1,1,9,1,3,1900),(2,2,6,2,2,678),(3,2,10,3,NULL,1000),(4,2,7,3,NULL,3400),(5,2,8,6,5,5200),(9,3,10,2,NULL,1000),(10,3,5,3,3,7100);

/*Table structure for table `customerorders` */

DROP TABLE IF EXISTS `customerorders`;

CREATE TABLE `customerorders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `orderno` varchar(50) DEFAULT NULL,
  `customerid` int(11) DEFAULT NULL,
  `orderdate` datetime DEFAULT NULL,
  `dateadded` datetime DEFAULT NULL,
  `addedby` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `customerid` (`customerid`),
  KEY `addedby` (`addedby`),
  CONSTRAINT `customerorders_ibfk_1` FOREIGN KEY (`customerid`) REFERENCES `customers` (`id`),
  CONSTRAINT `customerorders_ibfk_2` FOREIGN KEY (`addedby`) REFERENCES `users` (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

/*Data for the table `customerorders` */

insert  into `customerorders`(`id`,`orderno`,`customerid`,`orderdate`,`dateadded`,`addedby`) values (1,'987',1,'2020-09-13 00:00:00','2020-09-13 16:15:29',1),(2,'1001',1,'2020-09-13 00:00:00','2020-09-13 16:24:55',1),(3,'1081',1,'2020-09-14 00:00:00','2020-09-14 11:15:34',1);

/*Table structure for table `customers` */

DROP TABLE IF EXISTS `customers`;

CREATE TABLE `customers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `customername` varchar(50) DEFAULT NULL,
  `physicaladdress` varchar(1000) DEFAULT NULL,
  `postaladdress` varchar(100) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `mobile` varchar(50) DEFAULT NULL,
  `addedby` int(11) DEFAULT NULL,
  `dateadded` datetime DEFAULT NULL,
  `deleted` tinyint(1) DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `addedby` (`addedby`),
  CONSTRAINT `customers_ibfk_1` FOREIGN KEY (`addedby`) REFERENCES `users` (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

/*Data for the table `customers` */

insert  into `customers`(`id`,`customername`,`physicaladdress`,`postaladdress`,`email`,`mobile`,`addedby`,`dateadded`,`deleted`) values (1,'Richard Onyango','Workshop Road, Haile Sellasie Avenue','52428 00200 Nairobi','akellorich@yahoo.com','0727709772',1,'2020-09-12 17:12:20',0),(2,'MM','Nairobi','Nairobi','-','-',1,'2020-09-12 17:25:38',0);

/*Table structure for table `departments` */

DROP TABLE IF EXISTS `departments`;

CREATE TABLE `departments` (
  `departmentid` int(50) NOT NULL AUTO_INCREMENT,
  `departmentname` varchar(50) DEFAULT NULL,
  `dateadded` datetime DEFAULT NULL,
  `addedby` int(11) DEFAULT NULL,
  `deleted` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`departmentid`),
  KEY `addedby` (`addedby`),
  CONSTRAINT `departments_ibfk_1` FOREIGN KEY (`addedby`) REFERENCES `users` (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

/*Data for the table `departments` */

insert  into `departments`(`departmentid`,`departmentname`,`dateadded`,`addedby`,`deleted`) values (1,'IT','2020-08-20 18:30:43',1,0),(2,'Production','2020-08-23 17:35:59',1,0),(3,'Propagation','2020-08-23 17:39:09',1,0);

/*Table structure for table `dispatch` */

DROP TABLE IF EXISTS `dispatch`;

CREATE TABLE `dispatch` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `saletype` int(11) DEFAULT NULL,
  `addeby` int(11) DEFAULT NULL,
  `dispatchdate` datetime DEFAULT NULL,
  `customerid` int(11) DEFAULT NULL,
  `orderno` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `saletype` (`saletype`),
  KEY `customerid` (`customerid`),
  KEY `addeby` (`addeby`),
  CONSTRAINT `dispatch_ibfk_1` FOREIGN KEY (`saletype`) REFERENCES `salestypes` (`id`),
  CONSTRAINT `dispatch_ibfk_2` FOREIGN KEY (`customerid`) REFERENCES `customers` (`id`),
  CONSTRAINT `dispatch_ibfk_3` FOREIGN KEY (`addeby`) REFERENCES `users` (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `dispatch` */

/*Table structure for table `dispatchdetails` */

DROP TABLE IF EXISTS `dispatchdetails`;

CREATE TABLE `dispatchdetails` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dispatchid` int(11) DEFAULT NULL,
  `varietyid` int(11) DEFAULT NULL,
  `stemlength` int(11) DEFAULT NULL,
  `headlength` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `dispatchid` (`dispatchid`),
  KEY `varietyid` (`varietyid`),
  KEY `stemlength` (`stemlength`),
  CONSTRAINT `dispatchdetails_ibfk_1` FOREIGN KEY (`dispatchid`) REFERENCES `dispatch` (`id`),
  CONSTRAINT `dispatchdetails_ibfk_2` FOREIGN KEY (`varietyid`) REFERENCES `varieties` (`id`),
  CONSTRAINT `dispatchdetails_ibfk_3` FOREIGN KEY (`stemlength`) REFERENCES `stemlengths` (`stemlengthid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `dispatchdetails` */

/*Table structure for table `emailconfiguration` */

DROP TABLE IF EXISTS `emailconfiguration`;

CREATE TABLE `emailconfiguration` (
  `emailaddress` varchar(100) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `smtpserver` varchar(100) DEFAULT NULL,
  `usessl` tinyint(4) DEFAULT NULL,
  `smtpport` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `emailconfiguration` */

insert  into `emailconfiguration`(`emailaddress`,`password`,`smtpserver`,`usessl`,`smtpport`) values ('akellorich@gmail.com','nyumb@n1','smtp.gmail.com',1,465);

/*Table structure for table `grading` */

DROP TABLE IF EXISTS `grading`;

CREATE TABLE `grading` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `gradedby` int(11) DEFAULT NULL,
  `varietyid` int(11) DEFAULT NULL,
  `stemlength` int(11) DEFAULT NULL,
  `headlength` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `gradedby` (`gradedby`),
  KEY `varietyid` (`varietyid`),
  KEY `stemlength` (`stemlength`),
  CONSTRAINT `grading_ibfk_1` FOREIGN KEY (`gradedby`) REFERENCES `users` (`userid`),
  CONSTRAINT `grading_ibfk_2` FOREIGN KEY (`varietyid`) REFERENCES `varieties` (`id`),
  CONSTRAINT `grading_ibfk_3` FOREIGN KEY (`stemlength`) REFERENCES `stemlengths` (`stemlengthid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `grading` */

/*Table structure for table `gradinghallinventory` */

DROP TABLE IF EXISTS `gradinghallinventory`;

CREATE TABLE `gradinghallinventory` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `source` varchar(50) DEFAULT NULL,
  `narration` varchar(1000) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `varietyid` int(11) DEFAULT NULL,
  `stemlengthid` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `fullbucket` tinyint(1) DEFAULT NULL,
  `bucketcapacity` int(11) DEFAULT NULL,
  `addedby` int(11) DEFAULT NULL,
  `receivingid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `varietyid` (`varietyid`),
  KEY `stemlengthid` (`stemlengthid`),
  KEY `addedby` (`addedby`),
  KEY `receivingid` (`receivingid`),
  CONSTRAINT `gradinghallinventory_ibfk_1` FOREIGN KEY (`varietyid`) REFERENCES `varieties` (`id`),
  CONSTRAINT `gradinghallinventory_ibfk_2` FOREIGN KEY (`stemlengthid`) REFERENCES `stemlengths` (`stemlengthid`),
  CONSTRAINT `gradinghallinventory_ibfk_3` FOREIGN KEY (`addedby`) REFERENCES `users` (`userid`),
  CONSTRAINT `gradinghallinventory_ibfk_4` FOREIGN KEY (`receivingid`) REFERENCES `receivinginventory` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=latin1;

/*Data for the table `gradinghallinventory` */

insert  into `gradinghallinventory`(`id`,`source`,`narration`,`date`,`varietyid`,`stemlengthid`,`quantity`,`fullbucket`,`bucketcapacity`,`addedby`,`receivingid`) values (1,'Receiving Bay','Transferred from receiving inventory','2020-09-08 09:36:14',6,3,55,0,0,1,NULL),(2,'Receiving Bay','Transferred from receiving inventory','2020-09-08 09:36:18',6,3,55,0,0,1,NULL),(3,'Receiving Bay','Transferred from receiving inventory','2020-09-08 09:39:17',9,3,82,0,0,1,NULL),(4,'Receiving Bay','Transferred from receiving inventory','2020-09-08 09:46:05',8,1,24,0,0,1,NULL),(5,'Receiving Bay','Transferred from receiving inventory','2020-09-08 09:50:18',6,2,6,1,100,1,NULL),(6,'Receiving Bay','Transferred from receiving inventory','2020-09-08 09:50:18',6,2,30,0,0,1,NULL),(8,'Receiving Bay','Transferred from receiving inventory','2020-09-08 14:31:06',6,2,45,1,100,1,NULL),(9,'Receiving Bay','Transferred from receiving inventory','2020-09-08 14:31:06',6,2,41,0,0,1,NULL),(10,'Receiving Bay','Transferred from receiving inventory','2020-09-08 14:31:06',6,2,77,0,0,1,NULL),(11,'Receiving Bay','Transferred from receiving inventory','2020-09-08 14:31:06',6,2,97,0,0,1,NULL),(15,'Receiving Bay','Transferred from receiving inventory','2020-09-08 14:38:42',8,3,10,1,100,1,NULL),(16,'Receiving Bay','Transferred from receiving inventory','2020-09-08 14:38:42',8,3,67,0,0,1,NULL),(18,'Receiving Bay','Transferred from receiving inventory','2020-09-08 14:45:06',8,1,34,1,100,1,NULL),(19,'Receiving Bay','Transferred from receiving inventory','2020-09-08 14:45:06',8,1,25,0,0,1,NULL),(20,'Receiving Bay','Transferred from receiving inventory','2020-09-08 14:45:06',8,1,50,0,0,1,NULL),(21,'Receiving Bay','Transferred from receiving inventory','2020-09-08 14:45:06',8,1,34,0,0,1,NULL),(25,'Receiving Bay','Transferred from receiving inventory','2020-09-08 14:56:07',9,2,100,1,100,1,NULL),(26,'Receiving Bay','Transferred from receiving inventory','2020-09-08 14:56:07',6,3,34,1,100,1,NULL),(27,'Receiving Bay','Transferred from receiving inventory','2020-09-08 14:56:07',9,2,47,0,0,1,NULL),(28,'Receiving Bay','Transferred from receiving inventory','2020-09-08 14:56:07',9,2,48,0,0,1,NULL),(29,'Receiving Bay','Transferred from receiving inventory','2020-09-08 14:56:07',9,2,75,0,0,1,NULL),(30,'Receiving Bay','Transferred from receiving inventory','2020-09-08 14:56:07',9,2,38,0,0,1,NULL),(31,'Receiving Bay','Transferred from receiving inventory','2020-09-16 17:10:38',10,4,1,1,100,1,1);

/*Table structure for table `gradingreject` */

DROP TABLE IF EXISTS `gradingreject`;

CREATE TABLE `gradingreject` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rejectdate` datetime DEFAULT NULL,
  `rejectedby` int(11) DEFAULT NULL,
  `varietyid` int(11) DEFAULT NULL,
  `rejectid` int(11) DEFAULT NULL,
  `narration` varchar(500) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `buncherid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `rejectedby` (`rejectedby`),
  KEY `varietyid` (`varietyid`),
  KEY `rejectid` (`rejectid`),
  KEY `buncherid` (`buncherid`),
  CONSTRAINT `gradingreject_ibfk_1` FOREIGN KEY (`rejectedby`) REFERENCES `users` (`userid`),
  CONSTRAINT `gradingreject_ibfk_2` FOREIGN KEY (`varietyid`) REFERENCES `varieties` (`id`),
  CONSTRAINT `gradingreject_ibfk_4` FOREIGN KEY (`rejectid`) REFERENCES `rejectreasons` (`id`),
  CONSTRAINT `gradingreject_ibfk_5` FOREIGN KEY (`buncherid`) REFERENCES `bunchers` (`buncherid`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

/*Data for the table `gradingreject` */

insert  into `gradingreject`(`id`,`rejectdate`,`rejectedby`,`varietyid`,`rejectid`,`narration`,`quantity`,`buncherid`) values (1,'2020-09-08 17:56:04',1,6,5,'',4,8),(2,'2020-09-08 17:56:04',1,6,4,'',5,8),(3,'2020-09-08 17:56:04',1,6,1,'',2,8),(4,'2020-09-08 18:17:53',1,8,3,'',5,10),(5,'2020-09-08 18:17:53',1,8,4,'',6,10),(6,'2020-09-08 18:17:53',1,8,1,'',7,10),(7,'2020-09-08 19:59:37',1,9,5,'',2,10),(8,'2020-09-08 19:59:37',1,9,3,'',6,10),(9,'2020-09-10 09:50:13',1,8,3,'',3,10),(10,'2020-09-10 09:50:13',1,8,4,'',5,10);

/*Table structure for table `gradingstorageinventory` */

DROP TABLE IF EXISTS `gradingstorageinventory`;

CREATE TABLE `gradingstorageinventory` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dateadded` datetime DEFAULT NULL,
  `varietyid` int(11) DEFAULT NULL,
  `stemlengthid` int(11) DEFAULT NULL,
  `headsizeid` int(11) DEFAULT NULL,
  `bunchingstyleid` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `addedby` int(11) DEFAULT NULL,
  `source` varchar(50) DEFAULT NULL,
  `narration` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `varietyid` (`varietyid`),
  KEY `stemlengthid` (`stemlengthid`),
  KEY `headsizeid` (`headsizeid`),
  KEY `bunchingstyleid` (`bunchingstyleid`),
  KEY `addedby` (`addedby`),
  CONSTRAINT `gradingstorageinventory_ibfk_1` FOREIGN KEY (`varietyid`) REFERENCES `varieties` (`id`),
  CONSTRAINT `gradingstorageinventory_ibfk_2` FOREIGN KEY (`stemlengthid`) REFERENCES `stemlengths` (`stemlengthid`),
  CONSTRAINT `gradingstorageinventory_ibfk_3` FOREIGN KEY (`headsizeid`) REFERENCES `headsizes` (`id`),
  CONSTRAINT `gradingstorageinventory_ibfk_4` FOREIGN KEY (`bunchingstyleid`) REFERENCES `bunchingstyles` (`id`),
  CONSTRAINT `gradingstorageinventory_ibfk_5` FOREIGN KEY (`addedby`) REFERENCES `users` (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

/*Data for the table `gradingstorageinventory` */

insert  into `gradingstorageinventory`(`id`,`dateadded`,`varietyid`,`stemlengthid`,`headsizeid`,`bunchingstyleid`,`quantity`,`addedby`,`source`,`narration`) values (2,'2020-09-09 11:43:14',6,1,2,10,10,1,'Grading Hall','Transferred from Grading Hall'),(3,'2020-09-16 17:28:09',9,2,3,10,564,1,'Grading Hall','Transferred from Grading Hall');

/*Table structure for table `harvesting` */

DROP TABLE IF EXISTS `harvesting`;

CREATE TABLE `harvesting` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `unitid` int(11) DEFAULT NULL,
  `varietyid` int(11) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `addedby` int(11) DEFAULT NULL,
  `colletedby` int(11) DEFAULT NULL,
  `stemlength` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `unitid` (`unitid`),
  KEY `varietyid` (`varietyid`),
  KEY `addedby` (`addedby`),
  KEY `colletedby` (`colletedby`),
  KEY `stemlength` (`stemlength`),
  CONSTRAINT `harvesting_ibfk_1` FOREIGN KEY (`unitid`) REFERENCES `units` (`unitid`),
  CONSTRAINT `harvesting_ibfk_2` FOREIGN KEY (`varietyid`) REFERENCES `varieties` (`id`),
  CONSTRAINT `harvesting_ibfk_3` FOREIGN KEY (`addedby`) REFERENCES `users` (`userid`),
  CONSTRAINT `harvesting_ibfk_4` FOREIGN KEY (`colletedby`) REFERENCES `users` (`userid`),
  CONSTRAINT `harvesting_ibfk_5` FOREIGN KEY (`stemlength`) REFERENCES `stemlengths` (`stemlengthid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `harvesting` */

/*Table structure for table `headsizes` */

DROP TABLE IF EXISTS `headsizes`;

CREATE TABLE `headsizes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `headsize` decimal(18,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

/*Data for the table `headsizes` */

insert  into `headsizes`(`id`,`headsize`) values (1,'4.50'),(2,'5.00'),(3,'5.50'),(4,'6.00'),(5,'6.50'),(6,'7.00');

/*Table structure for table `objects` */

DROP TABLE IF EXISTS `objects`;

CREATE TABLE `objects` (
  `objectid` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(50) DEFAULT NULL,
  `module` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`objectid`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

/*Data for the table `objects` */

insert  into `objects`(`objectid`,`description`,`module`) values (1,'Manage system users','Inventory'),(2,'Enter production data','Inventory'),(3,'Enter random checks data','Inventory'),(4,'Enter receiving bay data','Inventory'),(5,'Transfer stock to various inventories','Inventory'),(6,'Enter grading data','Inventory');

/*Table structure for table `packagesizes` */

DROP TABLE IF EXISTS `packagesizes`;

CREATE TABLE `packagesizes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

/*Data for the table `packagesizes` */

insert  into `packagesizes`(`id`,`description`) values (1,'Standard'),(2,'Zim'),(3,'Jumbo'),(4,'Customer Provided');

/*Table structure for table `qualitycontrolpassed` */

DROP TABLE IF EXISTS `qualitycontrolpassed`;

CREATE TABLE `qualitycontrolpassed` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dateadded` datetime DEFAULT NULL,
  `addedby` int(11) DEFAULT NULL,
  `buncherid` int(11) DEFAULT NULL,
  `varietyid` int(11) DEFAULT NULL,
  `bunchstyleid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `addedby` (`addedby`),
  KEY `buncherid` (`buncherid`),
  KEY `varietyid` (`varietyid`),
  KEY `bunchstyleid` (`bunchstyleid`),
  CONSTRAINT `qualitycontrolpassed_ibfk_1` FOREIGN KEY (`addedby`) REFERENCES `users` (`userid`),
  CONSTRAINT `qualitycontrolpassed_ibfk_2` FOREIGN KEY (`buncherid`) REFERENCES `bunchers` (`buncherid`),
  CONSTRAINT `qualitycontrolpassed_ibfk_3` FOREIGN KEY (`varietyid`) REFERENCES `varieties` (`id`),
  CONSTRAINT `qualitycontrolpassed_ibfk_4` FOREIGN KEY (`bunchstyleid`) REFERENCES `bunchingstyles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=latin1;

/*Data for the table `qualitycontrolpassed` */

insert  into `qualitycontrolpassed`(`id`,`dateadded`,`addedby`,`buncherid`,`varietyid`,`bunchstyleid`) values (1,'2020-09-06 16:14:07',1,8,8,10),(2,'2020-09-06 16:35:41',1,13,6,10),(3,'2020-09-06 16:39:09',1,8,6,10),(4,'2020-09-06 16:39:20',1,1,9,7),(5,'2020-09-06 16:52:04',1,2,7,8),(6,'2020-09-06 18:33:49',1,8,8,10),(7,'2020-09-06 18:39:50',1,8,7,10),(8,'2020-09-06 18:40:34',1,8,7,10),(9,'2020-09-06 18:41:41',1,8,9,10),(10,'2020-09-06 18:42:00',1,8,10,10),(11,'2020-09-06 18:43:45',1,8,5,10),(12,'2020-09-06 18:44:47',1,1,9,10),(13,'2020-09-06 18:45:07',1,1,6,10),(14,'2020-09-06 18:45:14',1,1,5,10),(15,'2020-09-06 18:45:17',1,1,5,10),(16,'2020-09-06 18:45:20',1,1,5,10),(17,'2020-09-06 18:45:28',1,1,10,10),(18,'2020-09-07 13:39:53',1,8,10,10),(19,'2020-09-07 13:40:41',1,9,5,10),(20,'2020-09-07 13:40:52',1,9,5,10),(21,'2020-09-07 19:13:22',1,18,6,1),(22,'2020-09-08 10:33:18',1,15,8,5),(23,'2020-09-08 18:33:24',1,8,8,9),(24,'2020-09-08 19:57:21',1,4,5,10),(25,'2020-09-08 19:57:25',1,10,5,10),(26,'2020-09-08 19:57:27',1,8,5,10),(27,'2020-09-08 19:57:30',1,8,5,10),(28,'2020-09-10 09:51:15',1,3,6,10),(29,'2020-09-10 09:51:24',1,8,6,10),(30,'2020-09-10 09:57:11',1,3,8,10),(31,'2020-09-10 09:57:13',1,3,8,10),(32,'2020-09-13 11:24:22',1,19,9,10),(33,'2020-09-13 11:24:35',1,14,9,10),(34,'2020-09-13 11:24:45',1,19,9,10),(35,'2020-09-13 11:26:28',1,15,5,10);

/*Table structure for table `randomchecks` */

DROP TABLE IF EXISTS `randomchecks`;

CREATE TABLE `randomchecks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `varietyid` int(11) DEFAULT NULL,
  `stemlengthid` int(11) DEFAULT NULL,
  `counted` int(11) DEFAULT NULL,
  `unitid` int(11) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `addedby` int(11) DEFAULT NULL,
  `remarks` varchar(1000) DEFAULT NULL,
  `receivingid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `varietyid` (`varietyid`),
  KEY `stemlengthid` (`stemlengthid`),
  KEY `receivingid` (`receivingid`),
  CONSTRAINT `randomchecks_ibfk_2` FOREIGN KEY (`varietyid`) REFERENCES `varieties` (`id`),
  CONSTRAINT `randomchecks_ibfk_3` FOREIGN KEY (`stemlengthid`) REFERENCES `stemlengths` (`stemlengthid`),
  CONSTRAINT `randomchecks_ibfk_4` FOREIGN KEY (`receivingid`) REFERENCES `receivinginventory` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;

/*Data for the table `randomchecks` */

insert  into `randomchecks`(`id`,`varietyid`,`stemlengthid`,`counted`,`unitid`,`date`,`addedby`,`remarks`,`receivingid`) values (5,10,2,100,10,'2020-08-29 11:31:56',1,NULL,NULL),(6,10,4,78,10,'2020-08-29 11:31:56',1,NULL,NULL),(8,10,4,67,10,'2020-08-29 13:05:55',1,NULL,NULL),(9,10,2,100,10,'2020-09-06 09:24:08',1,'',NULL),(10,10,2,100,10,'2020-09-06 09:32:28',1,'',NULL),(11,11,4,100,10,'2020-09-06 09:35:02',1,'This is a test entry',NULL),(12,10,3,100,10,'2020-09-06 09:41:17',1,'This is another test',NULL),(13,10,2,98,10,'2020-09-06 09:43:20',1,'Yet another test',NULL),(14,10,1,100,10,'2020-09-06 10:04:05',1,'Last test',NULL),(15,10,2,100,10,'2020-09-06 10:19:08',1,'Test jocelyne',NULL),(16,10,3,100,10,'2020-09-06 10:47:05',1,'This is a test entry from mobile',NULL),(17,10,3,78,10,'2020-09-06 10:50:47',1,'Test',NULL),(18,5,2,100,9,'2020-09-06 11:02:20',1,'Test mobile 2',NULL),(19,10,2,130,10,'2020-09-07 12:52:40',1,'None',NULL),(20,10,2,230,10,'2020-09-07 13:37:54',1,'This is a test',NULL),(21,10,3,100,10,'2020-09-10 09:48:19',1,'',NULL),(22,10,4,100,10,'2020-09-16 15:29:05',1,'Test with receiving id',1);

/*Table structure for table `randomchecksfaults` */

DROP TABLE IF EXISTS `randomchecksfaults`;

CREATE TABLE `randomchecksfaults` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `randomcheckid` int(11) DEFAULT NULL,
  `faultid` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `randomcheckid` (`randomcheckid`),
  KEY `faultid` (`faultid`),
  CONSTRAINT `randomchecksfaults_ibfk_1` FOREIGN KEY (`randomcheckid`) REFERENCES `randomchecks` (`id`),
  CONSTRAINT `randomchecksfaults_ibfk_2` FOREIGN KEY (`faultid`) REFERENCES `rejectreasons` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=latin1;

/*Data for the table `randomchecksfaults` */

insert  into `randomchecksfaults`(`id`,`randomcheckid`,`faultid`,`quantity`) values (1,9,5,6),(2,9,4,10),(3,9,2,10),(4,10,2,7),(5,10,3,9),(6,10,4,17),(7,11,5,5),(8,11,3,3),(9,11,4,10),(10,13,5,7),(11,14,1,4),(12,14,3,6),(14,15,4,5),(15,15,1,18),(17,16,2,40),(18,17,5,23),(19,17,4,6),(21,18,4,8),(22,18,1,10),(24,19,3,5),(25,19,4,6),(27,20,5,10),(28,21,2,6),(29,21,4,2),(30,21,1,3);

/*Table structure for table `randomcheckverification` */

DROP TABLE IF EXISTS `randomcheckverification`;

CREATE TABLE `randomcheckverification` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `randomcheckid` int(11) DEFAULT NULL,
  `stemsize` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `randomcheckid` (`randomcheckid`),
  KEY `stemsize` (`stemsize`),
  CONSTRAINT `randomcheckverification_ibfk_1` FOREIGN KEY (`randomcheckid`) REFERENCES `randomchecks` (`id`),
  CONSTRAINT `randomcheckverification_ibfk_2` FOREIGN KEY (`stemsize`) REFERENCES `stemlengths` (`stemlengthid`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=latin1;

/*Data for the table `randomcheckverification` */

insert  into `randomcheckverification`(`id`,`randomcheckid`,`stemsize`,`quantity`) values (1,9,1,4),(2,9,2,89),(3,9,3,10),(4,10,2,95),(5,10,3,2),(7,11,2,5),(8,11,3,10),(9,11,4,80),(10,12,2,18),(11,12,3,78),(12,12,4,5),(13,13,2,95),(14,14,1,103),(15,15,3,103),(16,16,5,23),(17,16,3,107),(19,17,1,6),(20,17,3,74),(21,17,4,8),(22,18,2,96),(23,19,2,96),(24,20,2,23),(25,21,2,5),(26,21,3,90),(27,21,4,2),(28,22,3,5),(29,22,4,89),(30,22,6,5);

/*Table structure for table `receivinginventory` */

DROP TABLE IF EXISTS `receivinginventory`;

CREATE TABLE `receivinginventory` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `unitid` int(11) DEFAULT NULL,
  `driverid` int(11) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `pickingdate` datetime DEFAULT NULL,
  `collectiondate` datetime DEFAULT NULL,
  `varietyid` int(11) DEFAULT NULL,
  `stemlengthid` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `fullbucket` tinyint(1) DEFAULT NULL,
  `bucketcapacity` int(11) DEFAULT NULL,
  `addedby` int(11) DEFAULT NULL,
  `tagid` int(11) DEFAULT NULL,
  `tagactive` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `unitid` (`unitid`),
  KEY `driverid` (`driverid`),
  KEY `varietyid` (`varietyid`),
  KEY `stemlengthid` (`stemlengthid`),
  KEY `addedby` (`addedby`),
  KEY `tagid` (`tagid`),
  CONSTRAINT `receivinginventory_ibfk_1` FOREIGN KEY (`unitid`) REFERENCES `units` (`unitid`),
  CONSTRAINT `receivinginventory_ibfk_2` FOREIGN KEY (`driverid`) REFERENCES `users` (`userid`),
  CONSTRAINT `receivinginventory_ibfk_3` FOREIGN KEY (`varietyid`) REFERENCES `varieties` (`id`),
  CONSTRAINT `receivinginventory_ibfk_4` FOREIGN KEY (`stemlengthid`) REFERENCES `stemlengths` (`stemlengthid`),
  CONSTRAINT `receivinginventory_ibfk_5` FOREIGN KEY (`addedby`) REFERENCES `users` (`userid`),
  CONSTRAINT `receivinginventory_ibfk_6` FOREIGN KEY (`tagid`) REFERENCES `tags` (`tagid`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

/*Data for the table `receivinginventory` */

insert  into `receivinginventory`(`id`,`unitid`,`driverid`,`date`,`pickingdate`,`collectiondate`,`varietyid`,`stemlengthid`,`quantity`,`fullbucket`,`bucketcapacity`,`addedby`,`tagid`,`tagactive`) values (1,10,1,'2020-09-16 14:37:35','0000-00-00 00:00:00','0000-00-00 00:00:00',10,4,1,1,100,1,1,0),(2,9,11,'2020-09-16 14:39:56','2020-09-16 09:22:00','2020-09-16 09:22:00',5,1,65,0,0,1,2,1);

/*Table structure for table `rejectreasons` */

DROP TABLE IF EXISTS `rejectreasons`;

CREATE TABLE `rejectreasons` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(500) DEFAULT NULL,
  `dateadded` datetime DEFAULT NULL,
  `addedby` int(11) DEFAULT NULL,
  `deleted` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

/*Data for the table `rejectreasons` */

insert  into `rejectreasons`(`id`,`description`,`dateadded`,`addedby`,`deleted`) values (1,'Undersize','2020-08-23 11:54:48',1,0),(2,'Bends','2020-08-23 11:55:00',1,0),(3,'Drooping','2020-08-23 11:55:07',1,0),(4,'Spiral','2020-08-23 11:55:23',1,0),(5,'Bluish','2020-08-23 11:55:26',1,0);

/*Table structure for table `roleprivileges` */

DROP TABLE IF EXISTS `roleprivileges`;

CREATE TABLE `roleprivileges` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `objectid` int(11) DEFAULT NULL,
  `roleid` int(11) DEFAULT NULL,
  `valid` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `objectid` (`objectid`),
  KEY `roleid` (`roleid`),
  CONSTRAINT `roleprivileges_ibfk_1` FOREIGN KEY (`objectid`) REFERENCES `objects` (`objectid`),
  CONSTRAINT `roleprivileges_ibfk_2` FOREIGN KEY (`roleid`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;

/*Data for the table `roleprivileges` */

insert  into `roleprivileges`(`id`,`objectid`,`roleid`,`valid`) values (15,3,1,1),(16,4,1,1),(17,1,1,1),(18,5,1,1);

/*Table structure for table `roles` */

DROP TABLE IF EXISTS `roles`;

CREATE TABLE `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rolename` varchar(50) DEFAULT NULL,
  `roledescription` varchar(500) DEFAULT NULL,
  `addedby` int(11) DEFAULT NULL,
  `dateadded` datetime DEFAULT NULL,
  `deleted` tinyint(4) DEFAULT NULL,
  `deleteby` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `addedby` (`addedby`),
  CONSTRAINT `roles_ibfk_1` FOREIGN KEY (`addedby`) REFERENCES `users` (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

/*Data for the table `roles` */

insert  into `roles`(`id`,`rolename`,`roledescription`,`addedby`,`dateadded`,`deleted`,`deleteby`) values (1,'Flowerpicker','Flowerpicker',11,'2020-08-24 15:46:06',NULL,NULL);

/*Table structure for table `roleusers` */

DROP TABLE IF EXISTS `roleusers`;

CREATE TABLE `roleusers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `roleid` int(11) DEFAULT NULL,
  `userid` int(11) DEFAULT NULL,
  `dateadded` datetime DEFAULT NULL,
  `addedby` int(11) DEFAULT NULL,
  `active` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `roleid` (`roleid`),
  KEY `userid` (`userid`),
  KEY `addedby` (`addedby`),
  CONSTRAINT `roleusers_ibfk_1` FOREIGN KEY (`roleid`) REFERENCES `roles` (`id`),
  CONSTRAINT `roleusers_ibfk_2` FOREIGN KEY (`userid`) REFERENCES `users` (`userid`),
  CONSTRAINT `roleusers_ibfk_3` FOREIGN KEY (`addedby`) REFERENCES `users` (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

/*Data for the table `roleusers` */

insert  into `roleusers`(`id`,`roleid`,`userid`,`dateadded`,`addedby`,`active`) values (1,1,11,'2020-08-24 17:26:51',11,1);

/*Table structure for table `salestypes` */

DROP TABLE IF EXISTS `salestypes`;

CREATE TABLE `salestypes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `salestypes` */

/*Table structure for table `settings` */

DROP TABLE IF EXISTS `settings`;

CREATE TABLE `settings` (
  `collectioncoldroom` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `settings` */

insert  into `settings`(`collectioncoldroom`) values (1);

/*Table structure for table `smsconfiguration` */

DROP TABLE IF EXISTS `smsconfiguration`;

CREATE TABLE `smsconfiguration` (
  `username` varchar(100) DEFAULT NULL,
  `apikey` varchar(100) DEFAULT NULL,
  `senderid` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `smsconfiguration` */

insert  into `smsconfiguration`(`username`,`apikey`,`senderid`) values ('akellorich','b3e759834c7cfe900409c6f33251ea9234572407288d17f6b418bdfa3ee1d48d','');

/*Table structure for table `stemlengths` */

DROP TABLE IF EXISTS `stemlengths`;

CREATE TABLE `stemlengths` (
  `stemlengthid` int(11) NOT NULL AUTO_INCREMENT,
  `stemlength` int(50) DEFAULT NULL,
  PRIMARY KEY (`stemlengthid`),
  KEY `stemlengthid` (`stemlengthid`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

/*Data for the table `stemlengths` */

insert  into `stemlengths`(`stemlengthid`,`stemlength`) values (1,40),(2,50),(3,60),(4,70),(5,35),(6,80),(7,90),(8,100);

/*Table structure for table `tags` */

DROP TABLE IF EXISTS `tags`;

CREATE TABLE `tags` (
  `tagid` int(11) NOT NULL AUTO_INCREMENT,
  `label` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`tagid`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

/*Data for the table `tags` */

insert  into `tags`(`tagid`,`label`) values (1,'0001'),(2,'0002'),(3,'0003'),(4,'0004'),(5,'0005'),(6,'0006'),(7,'0007'),(8,'0008'),(9,'0009'),(10,'0010');

/*Table structure for table `tempcollection` */

DROP TABLE IF EXISTS `tempcollection`;

CREATE TABLE `tempcollection` (
  `refno` varchar(50) DEFAULT NULL,
  `unitid` int(11) DEFAULT NULL,
  `varietyid` int(11) DEFAULT NULL,
  `stemlength` int(11) DEFAULT NULL,
  `quantity` decimal(18,2) DEFAULT NULL,
  `driverid` int(11) DEFAULT NULL,
  `bucketcapacity` int(11) DEFAULT NULL,
  `fullbucket` tinyint(1) DEFAULT NULL,
  `pickingdate` datetime DEFAULT NULL,
  `deliverydate` datetime DEFAULT NULL,
  `tagid` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `tempcollection` */

insert  into `tempcollection`(`refno`,`unitid`,`varietyid`,`stemlength`,`quantity`,`driverid`,`bucketcapacity`,`fullbucket`,`pickingdate`,`deliverydate`,`tagid`) values ('4096',10,10,2,'5.00',11,100,1,'2020-09-04 10:17:00','2020-09-04 10:30:00',NULL),('4096',10,10,2,'66.00',11,0,0,'2020-09-04 10:17:00','2020-09-04 10:30:00',NULL),('5563',10,10,2,'15.00',1,100,1,'2020-09-10 05:43:00','2020-09-10 05:43:00',NULL);

/*Table structure for table `tempcustomerorderdetails` */

DROP TABLE IF EXISTS `tempcustomerorderdetails`;

CREATE TABLE `tempcustomerorderdetails` (
  `refno` varchar(50) DEFAULT NULL,
  `varietyid` int(11) DEFAULT NULL,
  `stemlengthid` int(11) DEFAULT NULL,
  `headsizeid` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `tempcustomerorderdetails` */

insert  into `tempcustomerorderdetails`(`refno`,`varietyid`,`stemlengthid`,`headsizeid`,`quantity`) values ('7662',6,4,3,1900),('2340',9,1,3,1900),('9341',9,1,3,1900),('7048',6,2,2,678),('7048',10,3,NULL,1000),('7048',7,3,NULL,3400),('7048',8,6,5,5200);

/*Table structure for table `tempgradinghallinventory` */

DROP TABLE IF EXISTS `tempgradinghallinventory`;

CREATE TABLE `tempgradinghallinventory` (
  `refno` varchar(50) DEFAULT NULL,
  `varietyid` int(11) DEFAULT NULL,
  `stemlengthid` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `fullbucket` tinyint(1) DEFAULT NULL,
  `bucketcapacity` int(11) DEFAULT NULL,
  `receivingid` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `tempgradinghallinventory` */

insert  into `tempgradinghallinventory`(`refno`,`varietyid`,`stemlengthid`,`quantity`,`fullbucket`,`bucketcapacity`,`receivingid`) values ('9031',6,3,55,0,0,NULL),('7552',6,3,55,0,0,NULL),('7990',6,3,55,0,0,NULL);

/*Table structure for table `tempgradingreject` */

DROP TABLE IF EXISTS `tempgradingreject`;

CREATE TABLE `tempgradingreject` (
  `refno` varchar(50) DEFAULT NULL,
  `varietyid` int(11) DEFAULT NULL,
  `buncherid` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `rejectid` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `tempgradingreject` */

/*Table structure for table `tempgradingstorageinventory` */

DROP TABLE IF EXISTS `tempgradingstorageinventory`;

CREATE TABLE `tempgradingstorageinventory` (
  `refno` varchar(50) DEFAULT NULL,
  `varietyid` int(11) DEFAULT NULL,
  `bunchstyleid` int(11) DEFAULT NULL,
  `headsizeid` int(11) DEFAULT NULL,
  `stemlengthid` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `tempgradingstorageinventory` */

insert  into `tempgradingstorageinventory`(`refno`,`varietyid`,`bunchstyleid`,`headsizeid`,`stemlengthid`,`quantity`) values ('7955',8,10,0,5,10);

/*Table structure for table `temprandomcheckfaults` */

DROP TABLE IF EXISTS `temprandomcheckfaults`;

CREATE TABLE `temprandomcheckfaults` (
  `refno` varchar(50) DEFAULT NULL,
  `faultid` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `temprandomcheckfaults` */

/*Table structure for table `temprandomchecks` */

DROP TABLE IF EXISTS `temprandomchecks`;

CREATE TABLE `temprandomchecks` (
  `refno` varchar(50) DEFAULT NULL,
  `unitid` int(11) DEFAULT NULL,
  `varietyid` int(11) DEFAULT NULL,
  `stemlengthid` int(11) DEFAULT NULL,
  `verified` float DEFAULT NULL,
  `counted` float DEFAULT NULL,
  KEY `unitid` (`unitid`),
  CONSTRAINT `temprandomchecks_ibfk_1` FOREIGN KEY (`unitid`) REFERENCES `units` (`unitid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `temprandomchecks` */

/*Table structure for table `temprandomcheckverification` */

DROP TABLE IF EXISTS `temprandomcheckverification`;

CREATE TABLE `temprandomcheckverification` (
  `refno` varchar(50) DEFAULT NULL,
  `stemsize` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `temprandomcheckverification` */

insert  into `temprandomcheckverification`(`refno`,`stemsize`,`quantity`) values ('6687',3,5),('6687',4,89),('6687',6,5);

/*Table structure for table `tempreceivinginventory` */

DROP TABLE IF EXISTS `tempreceivinginventory`;

CREATE TABLE `tempreceivinginventory` (
  `refno` varchar(50) DEFAULT NULL,
  `varietyid` int(11) DEFAULT NULL,
  `unitid` int(11) DEFAULT NULL,
  `stemlengthid` int(11) DEFAULT NULL,
  `tagid` int(11) DEFAULT NULL,
  `pickingdate` datetime DEFAULT NULL,
  `deliverydate` datetime DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `fullbucket` tinyint(1) DEFAULT NULL,
  `bucketcapacity` int(11) DEFAULT NULL,
  `driverid` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `tempreceivinginventory` */

/*Table structure for table `temproleprivileges` */

DROP TABLE IF EXISTS `temproleprivileges`;

CREATE TABLE `temproleprivileges` (
  `refno` varchar(50) DEFAULT NULL,
  `roleid` int(11) DEFAULT NULL,
  `objectid` int(11) DEFAULT NULL,
  `valid` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `temproleprivileges` */

insert  into `temproleprivileges`(`refno`,`roleid`,`objectid`,`valid`) values ('8820',1,6,1),('8820',1,2,1),('8820',1,3,1),('8820',1,4,1),('8820',1,1,1),('8820',1,5,1);

/*Table structure for table `tempunitvarieties` */

DROP TABLE IF EXISTS `tempunitvarieties`;

CREATE TABLE `tempunitvarieties` (
  `refno` varchar(50) DEFAULT NULL,
  `unitid` int(11) DEFAULT NULL,
  `varietyid` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `tempunitvarieties` */

/*Table structure for table `tempuserprivileges` */

DROP TABLE IF EXISTS `tempuserprivileges`;

CREATE TABLE `tempuserprivileges` (
  `refno` varchar(50) DEFAULT NULL,
  `userid` int(11) DEFAULT NULL,
  `objectid` int(11) DEFAULT NULL,
  `valid` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `tempuserprivileges` */

/*Table structure for table `transfers` */

DROP TABLE IF EXISTS `transfers`;

CREATE TABLE `transfers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sourcecoldroomid` int(11) DEFAULT NULL,
  `destinationcoldroomid` int(11) DEFAULT NULL,
  `varietyid` int(11) DEFAULT NULL,
  `stemlength` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `addedby` int(11) DEFAULT NULL,
  `collectedby` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `sourcecoldroomid` (`sourcecoldroomid`),
  KEY `destinationcoldroomid` (`destinationcoldroomid`),
  KEY `varietyid` (`varietyid`),
  KEY `stemlength` (`stemlength`),
  KEY `addedby` (`addedby`),
  KEY `collectedby` (`collectedby`),
  CONSTRAINT `transfers_ibfk_1` FOREIGN KEY (`sourcecoldroomid`) REFERENCES `coldrooms` (`coldroomid`),
  CONSTRAINT `transfers_ibfk_2` FOREIGN KEY (`destinationcoldroomid`) REFERENCES `coldrooms` (`coldroomid`),
  CONSTRAINT `transfers_ibfk_3` FOREIGN KEY (`varietyid`) REFERENCES `varieties` (`id`),
  CONSTRAINT `transfers_ibfk_4` FOREIGN KEY (`stemlength`) REFERENCES `stemlengths` (`stemlengthid`),
  CONSTRAINT `transfers_ibfk_5` FOREIGN KEY (`addedby`) REFERENCES `users` (`userid`),
  CONSTRAINT `transfers_ibfk_6` FOREIGN KEY (`collectedby`) REFERENCES `users` (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `transfers` */

/*Table structure for table `ungradeddiscard` */

DROP TABLE IF EXISTS `ungradeddiscard`;

CREATE TABLE `ungradeddiscard` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `discarddate` datetime DEFAULT NULL,
  `varietyid` int(11) DEFAULT NULL,
  `stemlength` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `addedby` int(11) DEFAULT NULL,
  `reason` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `stemlength` (`stemlength`),
  KEY `varietyid` (`varietyid`),
  KEY `addedby` (`addedby`),
  CONSTRAINT `ungradeddiscard_ibfk_1` FOREIGN KEY (`stemlength`) REFERENCES `stemlengths` (`stemlengthid`),
  CONSTRAINT `ungradeddiscard_ibfk_2` FOREIGN KEY (`varietyid`) REFERENCES `varieties` (`id`),
  CONSTRAINT `ungradeddiscard_ibfk_3` FOREIGN KEY (`addedby`) REFERENCES `users` (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `ungradeddiscard` */

/*Table structure for table `units` */

DROP TABLE IF EXISTS `units`;

CREATE TABLE `units` (
  `unitid` int(11) NOT NULL AUTO_INCREMENT,
  `unitname` int(50) DEFAULT NULL,
  `size` decimal(18,2) DEFAULT NULL,
  `dateadded` datetime DEFAULT NULL,
  `addedby` int(11) DEFAULT NULL,
  `deleted` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`unitid`),
  KEY `addedby` (`addedby`),
  CONSTRAINT `units_ibfk_1` FOREIGN KEY (`addedby`) REFERENCES `users` (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

/*Data for the table `units` */

insert  into `units`(`unitid`,`unitname`,`size`,`dateadded`,`addedby`,`deleted`) values (1,1,'1.00','2020-08-23 15:55:04',1,0),(2,2,'1.00','2020-08-23 15:56:47',1,0),(3,3,'1.00','2020-08-23 15:56:51',1,0),(4,4,'2.00','2020-08-23 15:56:56',1,0),(5,5,'1.50','2020-08-23 15:57:46',1,0),(6,6,'2.00','2020-08-26 10:28:15',1,0),(7,7,'1.50','2020-08-26 18:52:52',1,0),(8,8,'1.50','2020-08-26 18:55:39',1,0),(9,9,'1.00','2020-08-26 18:56:19',1,0),(10,10,'2.00','2020-08-26 19:21:59',1,0);

/*Table structure for table `unitusers` */

DROP TABLE IF EXISTS `unitusers`;

CREATE TABLE `unitusers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `unitid` int(11) DEFAULT NULL,
  `userid` int(11) DEFAULT NULL,
  `valid` int(11) DEFAULT NULL,
  `dateadded` datetime DEFAULT NULL,
  `addedby` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `unitid` (`unitid`),
  KEY `userid` (`userid`),
  KEY `addedby` (`addedby`),
  CONSTRAINT `unitusers_ibfk_1` FOREIGN KEY (`unitid`) REFERENCES `units` (`unitid`),
  CONSTRAINT `unitusers_ibfk_2` FOREIGN KEY (`userid`) REFERENCES `users` (`userid`),
  CONSTRAINT `unitusers_ibfk_3` FOREIGN KEY (`addedby`) REFERENCES `users` (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `unitusers` */

/*Table structure for table `unitvarieties` */

DROP TABLE IF EXISTS `unitvarieties`;

CREATE TABLE `unitvarieties` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `unitid` int(11) DEFAULT NULL,
  `varietyid` int(11) DEFAULT NULL,
  `valid` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

/*Data for the table `unitvarieties` */

insert  into `unitvarieties`(`id`,`unitid`,`varietyid`,`valid`) values (1,8,8,1),(2,8,9,1),(3,9,5,1),(4,9,10,1),(6,10,10,1),(7,10,11,1);

/*Table structure for table `userprivileges` */

DROP TABLE IF EXISTS `userprivileges`;

CREATE TABLE `userprivileges` (
  `privilegeid` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) DEFAULT NULL,
  `objectid` int(11) DEFAULT NULL,
  `valid` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`privilegeid`),
  KEY `userid` (`userid`),
  KEY `objectid` (`objectid`),
  CONSTRAINT `userprivileges_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `users` (`userid`),
  CONSTRAINT `userprivileges_ibfk_2` FOREIGN KEY (`objectid`) REFERENCES `objects` (`objectid`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=latin1;

/*Data for the table `userprivileges` */

insert  into `userprivileges`(`privilegeid`,`userid`,`objectid`,`valid`) values (22,1,2,1),(23,1,3,1),(24,1,4,1),(25,1,1,1),(29,11,6,1),(30,11,2,1),(31,11,3,1),(32,11,4,1),(33,11,1,1),(34,11,5,1);

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `userid` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `firstname` varchar(50) DEFAULT NULL,
  `lastname` varchar(50) DEFAULT NULL,
  `mobile` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `systemadmin` tinyint(1) DEFAULT NULL,
  `changepasswordonlogon` tinyint(1) DEFAULT NULL,
  `accountexpires` tinyint(1) DEFAULT NULL,
  `accountexpireson` datetime DEFAULT NULL,
  `accountactive` tinyint(1) DEFAULT NULL,
  `reasoninactive` varchar(500) DEFAULT NULL,
  `addedby` int(11) DEFAULT NULL,
  `departmentid` int(11) DEFAULT NULL,
  PRIMARY KEY (`userid`),
  UNIQUE KEY `mobile` (`mobile`),
  UNIQUE KEY `email` (`email`),
  KEY `addedby` (`addedby`),
  KEY `departmentid` (`departmentid`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`addedby`) REFERENCES `users` (`userid`),
  CONSTRAINT `users_ibfk_2` FOREIGN KEY (`departmentid`) REFERENCES `departments` (`departmentid`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

/*Data for the table `users` */

insert  into `users`(`userid`,`username`,`password`,`firstname`,`lastname`,`mobile`,`email`,`systemadmin`,`changepasswordonlogon`,`accountexpires`,`accountexpireson`,`accountactive`,`reasoninactive`,`addedby`,`departmentid`) values (1,'admin','1c986a5f526fda89666cdb2a9547a436','System','Admin','0727709772','akellorich@gmail.com',1,0,0,'0000-00-00 00:00:00',1,NULL,1,1),(11,'akellorich','1c986a5f526fda89666cdb2a9547a436','Richard','Akello','0753887406','akellorich@yahoo.com',1,0,0,'0000-00-00 00:00:00',1,NULL,1,1);

/*Table structure for table `varieties` */

DROP TABLE IF EXISTS `varieties`;

CREATE TABLE `varieties` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `varietyname` varchar(50) DEFAULT NULL,
  `dateadded` datetime DEFAULT NULL,
  `addedby` int(11) DEFAULT NULL,
  `deleted` tinyint(1) DEFAULT NULL,
  `measurehead` tinyint(1) DEFAULT NULL,
  `deletedby` int(11) DEFAULT NULL,
  `datedeleted` datetime DEFAULT NULL,
  `bucketcapacity` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `addedby` (`addedby`),
  CONSTRAINT `varieties_ibfk_1` FOREIGN KEY (`addedby`) REFERENCES `users` (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

/*Data for the table `varieties` */

insert  into `varieties`(`id`,`varietyname`,`dateadded`,`addedby`,`deleted`,`measurehead`,`deletedby`,`datedeleted`,`bucketcapacity`) values (5,'Rhodos','2020-08-22 18:07:48',1,0,1,NULL,NULL,100),(6,'Pink Rhodos','2020-08-22 18:16:51',1,0,1,NULL,NULL,100),(7,'Yelloween','2020-08-22 18:17:14',1,0,0,NULL,NULL,100),(8,'Lovely Rhodos','2020-08-22 18:19:48',1,0,1,NULL,NULL,100),(9,'Melina','2020-08-22 18:21:28',1,0,1,NULL,NULL,100),(10,'Shaghai Lady','2020-08-22 18:22:08',1,0,0,NULL,NULL,100),(11,'Test1','2020-08-26 10:24:54',1,0,1,NULL,NULL,50);

/* Procedure structure for procedure `spchangeuseraccountstatus` */

/*!50003 DROP PROCEDURE IF EXISTS  `spchangeuseraccountstatus` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spchangeuseraccountstatus`($userid int,$changedstatus varchar(50),$reason varchar(500))
BEGIN
	if $changedstatus='enable' then
		update users set `accountactive`=1 where `userid`=$userid;
	else
		update `users` set `accountactive`=0, `reasoninactive`=$reason where `userid`=$userid;
	end if;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spchangeuserpassword` */

/*!50003 DROP PROCEDURE IF EXISTS  `spchangeuserpassword` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spchangeuserpassword`($userid int,$userpassword varchar(50),$changepasswordonlogon boolean)
BEGIN
	update `users` set `password`=$userpassword, `changepasswordonlogon`=$changepasswordonlogon 
	where `userid`=$userid;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spcheckcustomer` */

/*!50003 DROP PROCEDURE IF EXISTS  `spcheckcustomer` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spcheckcustomer`($id int, $customername varchar(50))
BEGIN
	select * from `customers` where `id`<>$id and `customername`=$customername;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spcheckcustomerorderno` */

/*!50003 DROP PROCEDURE IF EXISTS  `spcheckcustomerorderno` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spcheckcustomerorderno`($customerid int,$orderno varchar(50))
BEGIN
	select * from `customerorders` where `orderno`=$orderno and `customerid`=$customerid;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spcheckdepartment` */

/*!50003 DROP PROCEDURE IF EXISTS  `spcheckdepartment` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spcheckdepartment`($departmentid int,$departmentname varchar(100))
BEGIN
	select * from `departments` where `departmentid`<>$departmentid and `departmentname`=$departmentname;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spcheckflowerrejectreason` */

/*!50003 DROP PROCEDURE IF EXISTS  `spcheckflowerrejectreason` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spcheckflowerrejectreason`($id int,$rejectreason varchar(100))
BEGIN
	select * from `rejectreasons` where `id`<>$id and `description`=$rejectreason;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spcheckflowerunit` */

/*!50003 DROP PROCEDURE IF EXISTS  `spcheckflowerunit` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spcheckflowerunit`($unitid int,$unitname varchar(100))
BEGIN
	select * from `units` where `unitid`<>$unitid and `unitname`=$unitname;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spcheckflowervariety` */

/*!50003 DROP PROCEDURE IF EXISTS  `spcheckflowervariety` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spcheckflowervariety`($id int,$varietyname varchar(50))
BEGIN
	select * from `varieties` where `id`<>$id and `varietyname`=$varietyname;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spcheckrole` */

/*!50003 DROP PROCEDURE IF EXISTS  `spcheckrole` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spcheckrole`($roleid int, $rolename varchar(50))
BEGIN
	select * from `roles` where `rolename`=$rolename and `id`<>$roleid;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spcheckuser` */

/*!50003 DROP PROCEDURE IF EXISTS  `spcheckuser` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spcheckuser`($userid int,$checkfield varchar(50),$checkvalue varchar(50))
BEGIN
	if $checkfield='username' then
		select * from users where username=$checkvalue and userid <>$userid;
	elseif $checkfield='mobile' then
		select * from users where `mobile`=$checkvalue  AND userid <>$userid;
	elseif $checkfield='email' then
		select * from users where `email`=$checkfield  AND userid <>$userid;
	end if;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spgetallusers` */

/*!50003 DROP PROCEDURE IF EXISTS  `spgetallusers` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spgetallusers`($accountstatus varchar(50))
BEGIN
    
	if $accountstatus='<All>' then
		select * from `users` order by firstname,lastname;
	elseif $accountstatus='active' then 
		select * from `users` where `accountactive`=1;
	elseif $accountstatus='inactive' then
		select * from `users` where `accountactive`=0;
	end if;
	
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spgetbunchers` */

/*!50003 DROP PROCEDURE IF EXISTS  `spgetbunchers` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spgetbunchers`()
BEGIN
	select * from `bunchers` order by `bunchername`;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spgetbunchingsizes` */

/*!50003 DROP PROCEDURE IF EXISTS  `spgetbunchingsizes` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spgetbunchingsizes`($standard varchar(50))
BEGIN
	if $standard='All' then 
		select * from `bunchingstyles` order by quantity;
	else
		set $standard=cast($standard as signed);
		select * from `bunchingstyles` 
		where `standard`=$tandard order by quantity;
	end if;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spgetcollectiondetailsbytag` */

/*!50003 DROP PROCEDURE IF EXISTS  `spgetcollectiondetailsbytag` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spgetcollectiondetailsbytag`($taglabel varchar(50))
BEGIN
	SELECT c.id,DATE_FORMAT(c.`datetime`,'%d-%b-%Y %h:%i %p') `datetime`,c.`coldroomid`,c.`unitid`,c.`varietyid`,c.`stemlength`,c.`quantity`,
	c.`addedby`,c.`driverid`,c.`bucketcapacity`,c.`fullbucket`,DATE_FORMAT(c.`pickingdate`,'%d-%b-%Y %H:%i') pickingdate,
	DATE_FORMAT(c.`deliverydate`,'%d-%b-%Y %H:%i') deliverydate, c.`tagid`,c.`tagactive`
	FROM `collection` c, `tags` t
	WHERE c.`tagid`=t.`tagid` AND c.tagactive=1 AND `label`=$taglabel;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spgetcustomerdetails` */

/*!50003 DROP PROCEDURE IF EXISTS  `spgetcustomerdetails` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spgetcustomerdetails`($id int)
BEGIN
	select * from `customers` where `id`=$id;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spgetcustomerorders` */

/*!50003 DROP PROCEDURE IF EXISTS  `spgetcustomerorders` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spgetcustomerorders`($customerid int)
BEGIN
	SELECT c.`id` orderid, `orderno`,DATE_FORMAT(`orderdate`,'%d-%b-%Y') `orderdate`,CONCAT(`firstname`, ' ',`lastname`) addedby,
	DATE_FORMAT(c.`dateadded`,'%d-%b-%Y %h:%m:%s %p')`dateadded`,`varietyname`,IFNULL(`headsize`,0) `headsize`,`stemlength`, cd.`quantity`
	FROM `customerorders` c 
	INNER JOIN`customerorderdetails` cd ON  c.`id`=cd.`orderid`
	INNER JOIN `stemlengths` s ON cd.`stemlengthid`=s.`stemlengthid`
	INNER JOIN `varieties` v ON cd.`varietyid`=v.`id`
	INNER JOIN `users` u ON  c.`addedby`=u.`userid`
	LEFT OUTER JOIN `headsizes` h ON cd.`headsizeid`=h.`id`
	where c.`customerid`=$customerid
	ORDER BY `orderdate` DESC, c.`dateadded` DESC,varietyname;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spgetcustomers` */

/*!50003 DROP PROCEDURE IF EXISTS  `spgetcustomers` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spgetcustomers`()
BEGIN
	select c.*, concat(`firstname`,' ',`lastname`)
	from `customers` c, `users` u
	where c.`addedby`=u.`userid` and ifnull(`deleted`,0)=0
	order by `customername`;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spgetdepartments` */

/*!50003 DROP PROCEDURE IF EXISTS  `spgetdepartments` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spgetdepartments`()
BEGIN
	select d.`departmentid`,`departmentname`,date_format(`dateadded`,'%d-%b-%Y')`dateadded`,concat(`firstname`,' ',`lastname`)`addedby`
	from `departments` d, `users` u
	where d.`addedby`=u.`userid` and ifnull(d.`deleted`,0)=0
	order by `departmentname`;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spgetdistinctcustomerorders` */

/*!50003 DROP PROCEDURE IF EXISTS  `spgetdistinctcustomerorders` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spgetdistinctcustomerorders`($customerid int)
BEGIN
	select id,`orderno` from `customerorders` where `customerid`=$customerid 
	order by `orderno` desc;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spgetemailconfiguration` */

/*!50003 DROP PROCEDURE IF EXISTS  `spgetemailconfiguration` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spgetemailconfiguration`()
BEGIN
	select * from `emailconfiguration`;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spgetflowerrejectreasons` */

/*!50003 DROP PROCEDURE IF EXISTS  `spgetflowerrejectreasons` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spgetflowerrejectreasons`()
BEGIN
	select `id`,`description`,date_format(`dateadded`,'%d-%b-%Y')`dateadded`,concat(`firstname`,' ',`lastname`)`addedby`
	from `rejectreasons` r, `users` u
	where r.`addedby`=u.`userid`
	order by `description`;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spgetflowerunits` */

/*!50003 DROP PROCEDURE IF EXISTS  `spgetflowerunits` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spgetflowerunits`()
BEGIN
	select `unitid`,`unitname`,`size`,date_format(`dateadded`,'%d-%b-%Y')`dateadded`, concat(`firstname`,' ',`lastname`) `addedby`
	from `units` u, `users` s
	where u.`addedby`=s.`userid` and ifnull(u.`deleted`,0)=0
	order by `unitname`;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spgetflowervarieties` */

/*!50003 DROP PROCEDURE IF EXISTS  `spgetflowervarieties` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spgetflowervarieties`()
BEGIN
	select `id` as varietyid,`varietyname`,date_format(`dateadded`,'%d-%b-%Y') `dateadded`, `bucketcapacity`, case when `measurehead`=1 then 'Yes' else 'No' end as `measurehead`,
	concat(`firstname`,' ',`lastname`) addedby
	from `varieties` v, `users` u
	where v.`addedby`=u.`userid` and ifnull(v.`deleted`,0)=0
	order by `varietyname`;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spgetheadsizes` */

/*!50003 DROP PROCEDURE IF EXISTS  `spgetheadsizes` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spgetheadsizes`()
BEGIN
	select * from `headsizes` order by `headsize`;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spgetnonuserroles` */

/*!50003 DROP PROCEDURE IF EXISTS  `spgetnonuserroles` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spgetnonuserroles`($userid int)
BEGIN
	select * from `roles` 
	where id not in(select `roleid` from `roleusers` where `userid`=$userid)
	order by rolename;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spgetobjects` */

/*!50003 DROP PROCEDURE IF EXISTS  `spgetobjects` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spgetobjects`()
BEGIN
	select * from `objects` order by `description`;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spgetpackagingsize` */

/*!50003 DROP PROCEDURE IF EXISTS  `spgetpackagingsize` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spgetpackagingsize`()
BEGIN
	select * from `packagesizes` order by `description`;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spgetqualitycontrolpassed` */

/*!50003 DROP PROCEDURE IF EXISTS  `spgetqualitycontrolpassed` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spgetqualitycontrolpassed`($startdate datetime,$enddate datetime,$userid int)
BEGIN
	select q.`id`,date_format(q.`dateadded`,'%d-%b-%Y %h:%i %p')`addedon`,concat(`firstname`,' ',`lastname`) as username,q.`buncherid`,`bunchername`,
	`varietyid`,`varietyname`,`bunchstyleid`,`quantity`,q.addedby
	from `qualitycontrolpassed` q,`bunchingstyles` s,`bunchers` b,`varieties` v,`users` u
	where q.`addedby`=u.`userid` and q.`buncherid`=b.`buncherid` and q.`varietyid`=v.`id` and q.`bunchstyleid`=s.`id`
	and u.`userid`=$userid and date_format(q.`dateadded`,'%Y-%m-%d') between $startdate and $enddate
	order by q.`dateadded` desc limit 5;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spgetqualitycontroltally` */

/*!50003 DROP PROCEDURE IF EXISTS  `spgetqualitycontroltally` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spgetqualitycontroltally`($startdate datetime,$enddate datetime)
BEGIN
	select `bunchername`,`varietyname`,count(q.`id`) as varietycount,
	(select count(q1.`id`) from `qualitycontrolpassed` q1 where date_format(q1.`dateadded`,'%Y-%m-%d') between $startdate and $enddate and q1.`buncherid`=q.`buncherid`) as totalcount
	from `qualitycontrolpassed` q, `varieties` v,`bunchers` b
	where q.`varietyid`=v.`id` and q.`buncherid`=b.`buncherid`
	and date_format(q.`dateadded`,'%Y-%m-%d') BETWEEN $startdate AND $enddate
	group by `bunchername`,`varietyname`
	order by totalcount desc, bunchername,varietyname;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spgetreceivedinventorybytag` */

/*!50003 DROP PROCEDURE IF EXISTS  `spgetreceivedinventorybytag` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spgetreceivedinventorybytag`($taglabel varchar(50))
BEGIN
	select r.* from `receivinginventory` r, `tags` t
	where r.tagid=t.tagid and r.tagactive=1 and t.label=$taglabel;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spgetroledetails` */

/*!50003 DROP PROCEDURE IF EXISTS  `spgetroledetails` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spgetroledetails`($roleid int)
BEGIN
	select * from `roles` where id=$roleid;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spgetroleprivileges` */

/*!50003 DROP PROCEDURE IF EXISTS  `spgetroleprivileges` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spgetroleprivileges`($roleid int)
BEGIN
	select * from `roleprivileges` where `roleid`=$roleid and valid=1;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spgetroles` */

/*!50003 DROP PROCEDURE IF EXISTS  `spgetroles` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spgetroles`()
BEGIN
	select * from `roles` where ifnull(`deleted`,0)=0
	order by `rolename`;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spgetroleusers` */

/*!50003 DROP PROCEDURE IF EXISTS  `spgetroleusers` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spgetroleusers`($roleid int)
BEGIN
	select * from users where userid in(select userid from `roleusers` where `roleid`=$roleid and `active`=1)
	order by firstname,lastname;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spgetshift` */

/*!50003 DROP PROCEDURE IF EXISTS  `spgetshift` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spgetshift`()
BEGIN
	SELECT 
		CASE WHEN DATE_FORMAT(NOW(),'%k')<=13 THEN 
			'morning'
		ELSE 
			'evening' 
		END AS shift;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spgetsmsconfiguration` */

/*!50003 DROP PROCEDURE IF EXISTS  `spgetsmsconfiguration` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spgetsmsconfiguration`()
BEGIN
	select * from `smsconfiguration`;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spgetstemlength` */

/*!50003 DROP PROCEDURE IF EXISTS  `spgetstemlength` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spgetstemlength`()
BEGIN
	select * from `stemlengths` order by `stemlength`;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spgetsystemmodules` */

/*!50003 DROP PROCEDURE IF EXISTS  `spgetsystemmodules` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spgetsystemmodules`()
BEGIN
	SELECT DISTINCT `module` FROM `objects` 
	WHERE `module` IS NOT NULL 
	ORDER BY `module`;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spgettagdetails` */

/*!50003 DROP PROCEDURE IF EXISTS  `spgettagdetails` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spgettagdetails`($taglabel varchar(50))
BEGIN
	select * from `tags` where `label`=$taglabel;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spgettagstatus` */

/*!50003 DROP PROCEDURE IF EXISTS  `spgettagstatus` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spgettagstatus`($taglabel varchar(50))
BEGIN
	select `tagactive` from `collection` c, `tags` t
	where t.`tagid`=c.`tagid` and t.`label`=@taglabel;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spgetunitvarieties` */

/*!50003 DROP PROCEDURE IF EXISTS  `spgetunitvarieties` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spgetunitvarieties`($unitid int)
BEGIN
	select u.`varietyid` ,`varietyname` from `unitvarieties` u, `varieties` v
	where v.`id`=u.`varietyid` and `unitid`=$unitid
	order by `varietyname`;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spgetuserdetails` */

/*!50003 DROP PROCEDURE IF EXISTS  `spgetuserdetails` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spgetuserdetails`($searchfield varchar(50),$searchvalue varchar(50))
BEGIN
    
	if $searchfield='userid' then
		set @userid=cast($searchvalue as signed);
		select *,
			case when `accountexpires`=1 then 
				case when date_format(now(),'%Y-%m-%d')>`accountexpireson` then 1 else 0 end 
				else 0 end as `accountexpired`
		from users where userid=@userid;
	elseif $searchfield='username' then
		select *,
			CASE WHEN `accountexpires`=1 THEN 
				CASE WHEN DATE_FORMAT(NOW(),'%Y-%m-%d')>`accountexpireson` THEN 1 ELSE 0 END 
				ELSE 0 END AS `accountexpired`
		from users where username=$searchvalue;
	end if;
	
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spgetusernonroles` */

/*!50003 DROP PROCEDURE IF EXISTS  `spgetusernonroles` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spgetusernonroles`($userid int)
BEGIN
	select * from roles where roleid not in(select roleid from `roleusers` where `userid`=$userid and `active`=1);
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spgetuserprivileges` */

/*!50003 DROP PROCEDURE IF EXISTS  `spgetuserprivileges` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spgetuserprivileges`($userid int)
BEGIN
	select * from `userprivileges` where `valid`=1 and `userid`=$userid;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spgetuserroles` */

/*!50003 DROP PROCEDURE IF EXISTS  `spgetuserroles` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spgetuserroles`($category varchar(50),$userid int)
BEGIN
	if $category='current' then
		select `roleid`,`rolename` 
		from `roles` r, `roleusers` ru 
		where ru.`roleid`=r.`id` and ru.`userid`=$userid and `active`=1;
	else
		select `id` roleid,`rolename` 
		from `roles` 
		where `id` not in(select `roleid` from `roleusers` where `userid`=$userid);
	end if;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spgetuserunits` */

/*!50003 DROP PROCEDURE IF EXISTS  `spgetuserunits` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spgetuserunits`($userid int,$state varchar(50))
BEGIN
	if $state='assigned' then 
		select * 
		from `units` 
		where unitid in(select `unitid` from `unitusers` where userid=$userid and ifnull(valid,0)=0)
		order by `unitname`;
	else
		SELECT * 
		FROM `units` 
		WHERE unitid not IN(SELECT `unitid` FROM `unitusers` WHERE userid=$userid AND IFNULL(valid,0)=0)
		ORDER BY `unitname`;
	end if;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spgetvarietydetails` */

/*!50003 DROP PROCEDURE IF EXISTS  `spgetvarietydetails` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spgetvarietydetails`($varietyid int)
BEGIN
	select * from `varieties` where `id`=$varietyid;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spremoveuserrole` */

/*!50003 DROP PROCEDURE IF EXISTS  `spremoveuserrole` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spremoveuserrole`($roleid int,$userid int)
BEGIN
	update `roleusers` set `active`=0 where `roleid`=$roleid and `userid`=$userid;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spsavecollection` */

/*!50003 DROP PROCEDURE IF EXISTS  `spsavecollection` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spsavecollection`($id int,$refno varchar(50),$userid int)
BEGIN
    
	set @coldroomid=(select `collectioncoldroom` from `settings`);
	
	insert into `collection`(`datetime`,`coldroomid`,`unitid`,`varietyid`,`stemlength`,`quantity`,`addedby`,`driverid`,`bucketcapacity`,`fullbucket`,`pickingdate`,`deliverydate`,`tagid`,`tagactive`)
	select now(),@coldroomid,`unitid`,`varietyid`,`stemlength`,`quantity`,$userid,`driverid`,`bucketcapacity`,`fullbucket`,`pickingdate`,`deliverydate` ,`tagid`,1
	from `tempcollection`
	where `refno`=$refno;
	
	delete from `tempcollection` where `refno`=$refno;
	
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spsavecustomerorder` */

/*!50003 DROP PROCEDURE IF EXISTS  `spsavecustomerorder` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spsavecustomerorder`($refno varchar(50),$customerid int, $orderno varchar(50),$orderdate datetime,$userid int)
BEGIN
	declare $orderid int;
	
	insert into `customerorders`(`orderno`,`customerid`,`orderdate`,`dateadded`,`addedby`)
	values($orderno,$customerid,$orderdate,now(),$userid);
	
	set $orderid=(select max(`id`) from `customerorders`);
	
	insert into `customerorderdetails`(`orderid`,`varietyid`,`stemlengthid`,`headsizeid`,`quantity`)
	select $orderid,`varietyid`,`stemlengthid`,`headsizeid`,`quantity` from `tempcustomerorderdetails` where `refno`=$refno;
	
	delete from `tempcustomerorderdetails` where `refno`=$refno;
	
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spsavecustomers` */

/*!50003 DROP PROCEDURE IF EXISTS  `spsavecustomers` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spsavecustomers`($customerid int, $customername varchar(50),$physicaladdress varchar(1000),$postaladdress varchar(100),$telephone varchar(50),$email varchar(50),$userid int)
BEGIN
	if $customerid=0 then
		insert into `customers`(`customername`,`physicaladdress`,`postaladdress`,`email`,`mobile`,`addedby`,`dateadded`)
		values($customername,$physicaladdress,$postaladdress,$email,$telephone,$userid,now());
	else
		update `customers` set `customername`=$customername,`physicaladdress`=$physicaladdress, 
		`postaladdress`=$postaladdress,`email`=$email,`mobile`=$telephone where `id`=$customerid;
	end if;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spsavedepartment` */

/*!50003 DROP PROCEDURE IF EXISTS  `spsavedepartment` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spsavedepartment`($departmentid int,$departmentname varchar(100),$addedby int)
BEGIN
	if $departmentid=0 then 
		insert into `departments`(`departmentname`,`dateadded`,`addedby`,`deleted`)
		values($departmentname,now(),$addedby,0);
	else
		update `departments` set `departmentname`=$departmentname where `departmentid`=$departmentid;
	end if;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spsaveemailconfiguration` */

/*!50003 DROP PROCEDURE IF EXISTS  `spsaveemailconfiguration` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spsaveemailconfiguration`($emailaddress varchar(100),$emailpassword varchar(50),$smtpserver varchar(50),$smtpport int,$usessl boolean)
BEGIN
	if not exists(select * from `emailconfiguration`) then
		insert into `emailconfiguration`(`emailaddress`,`password`,`smtpserver`,`usessl`,`smtpport`)
		values($emailaddress,$emailpassword,$smtpserver,$usessl,$smtpport);
	else
		update `emailconfiguration` 
		set `emailaddress`=$emailaddress,`password`=$emailpassword,`smtpserver`=$smtpserver,`usessl`=$usessl,`smtpport`=$smtpport;
	end if;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spsaveflowerrejectreason` */

/*!50003 DROP PROCEDURE IF EXISTS  `spsaveflowerrejectreason` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spsaveflowerrejectreason`($id int,$rejectreason varchar(100),$addedby int)
BEGIN
	if $id=0 then 
		insert into `rejectreasons`(`description`,`dateadded`,`addedby`,`deleted`)
		values($rejectreason,now(),$addedby,0);
	else
		update `rejectreasons` set `description`=$rejectreason where `id`=$id;
	end if;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spsaveflowerunit` */

/*!50003 DROP PROCEDURE IF EXISTS  `spsaveflowerunit` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spsaveflowerunit`($unitid int,$unitname varchar(100),$acreage numeric(18,2),$addedby int)
BEGIN
	if $unitid=0 then 
		insert into `units`(`unitname`,`size`,`dateadded`,`addedby`,`deleted`)
		values($unitname,$acreage,now(),$addedby,0);
		set $unitid=(select max(`unitid`) from `units`);
	else
		update `units` set `unitname`=$unitname, `size`=$acreage
		where `unitid`=$unitid;
	end if;
	
	select $unitid as unitid;
	
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spsaveflowervariety` */

/*!50003 DROP PROCEDURE IF EXISTS  `spsaveflowervariety` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spsaveflowervariety`($id int,$varietyname varchar(50),$bucketcapacity numeric,$measurehead boolean,$userid int)
BEGIN
	if $id=0 then 
		insert into `varieties`(`varietyname`,`bucketcapacity`,`measurehead`,`dateadded`,`addedby`,`deleted`)
		values($varietyname,$bucketcapacity,$measurehead,now(),$userid,0);
	else
		update `varieties` set `varietyname`=$varietyname,`bucketcapacity`=$bucketcapacity,`measurehead`=$measurehead
		where `id`=$id;
	end if;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spsavegradinghallinventory` */

/*!50003 DROP PROCEDURE IF EXISTS  `spsavegradinghallinventory` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spsavegradinghallinventory`($refno varchar(50),$source varchar(50),$narration varchar(1000), $userid int)
BEGIN
	insert into `gradinghallinventory`(`source`,`narration`,`date`,`varietyid`,`stemlengthid`,`quantity`,`fullbucket`,`bucketcapacity`,`addedby`,`receivingid`)
	select $source,$narration,now(),`varietyid`,`stemlengthid`,`quantity`,`fullbucket`,`bucketcapacity`,$userid,`receivingid`
	from `tempgradinghallinventory` where `refno`=$refno;
	
	update `receivinginventory` set `tagactive`=0 where `id` in(select `receivingid` from `tempgradinghallinventory` where refno=$refno);
	
	delete from `tempgradinghallinventory` where `refno`=$refno;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spsavegradingreject` */

/*!50003 DROP PROCEDURE IF EXISTS  `spsavegradingreject` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spsavegradingreject`($refno varchar(50),$userid int)
BEGIN
	insert into `gradingreject`(`rejectdate`,`rejectedby`,`varietyid`,`rejectid`,`buncherid`,`quantity`,`narration`)
	select now(),$userid,`varietyid`,`rejectid`,`buncherid`,`quantity`,'' from `tempgradingreject` where `refno`=$refno;
	
	delete from `tempgradingreject` where `refno`=$refno;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spsavegradingstorageinventory` */

/*!50003 DROP PROCEDURE IF EXISTS  `spsavegradingstorageinventory` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spsavegradingstorageinventory`($refno varchar(50),$source varchar(50),$narration varchar(50), $userid int)
BEGIN
    
	insert into `gradingstorageinventory`(`dateadded`,`source`,`narration`,`varietyid`,`stemlengthid`,`headsizeid`,`bunchingstyleid`,`quantity`,`addedby`)
	select now(),$source,$narration,`varietyid`,`stemlengthid`,`headsizeid`,`bunchstyleid`,`quantity`,$userid from `tempgradingstorageinventory`
	where `refno`=$refno;
	
	delete from `tempgradingstorageinventory` where `refno`=$refno;
	
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spsaveprivileges` */

/*!50003 DROP PROCEDURE IF EXISTS  `spsaveprivileges` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spsaveprivileges`($refno varchar(50),$category varchar(50), $itemid int,$addedby int)
BEGIN
	if $category='user' then
		delete from `userprivileges` where `userid`=$itemid;
		insert into `userprivileges`(`userid`,`objectid`,`valid`)
		select `userid`,`objectid`,`valid` from `tempuserprivileges` where `refno`=$refno;
		delete from `tempuserprivileges` where `refno`=$refno;
	else
		delete from `roleprivileges` where `roleid`=$itemid;
		insert into `roleprivileges`(`objectid`,`roleid`,`valid`)
		select `objectid`,`roleid`,`valid` from `temproleprivileges` where `refno`=$refno;
		delete from `temproleprivileges` where `refno`=$refno;		
	end if;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spsavequalitycontrolpassed` */

/*!50003 DROP PROCEDURE IF EXISTS  `spsavequalitycontrolpassed` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spsavequalitycontrolpassed`($id int,$varietyid int,$bunchstyleid int,$buncherid int,$userid int)
BEGIN
	if $id=0 then 
		insert into `qualitycontrolpassed`(`dateadded`,`addedby`,`buncherid`,`varietyid`,`bunchstyleid`)
		values(now(),$userid,$buncherid,$varietyid,$bunchstyleid);
	else
		update `qualitycontrolpassed` set `buncherid`=$buncherid,`varietyid`=$varietyid,`bunchstyleid`=$bunchstyleid
		where `id`=$id;
	end if;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spsaverandomchecks` */

/*!50003 DROP PROCEDURE IF EXISTS  `spsaverandomchecks` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spsaverandomchecks`($id int,$unitid int,$varietyid int,$stemlength int,$counted int, $refno varchar(50),$addedby int,$remarks varchar(1000),$receivingid int)
BEGIN
		if $id=0 then 
			insert into `randomchecks`(`varietyid`,`stemlengthid`,`counted`,`unitid`,`date`,`addedby`,`remarks`,`receivingid`)
			values($varietyid,$stemlength,$counted,$unitid,now(),$addedby,$remarks,$receivingid);
			set $id=(select max(`id`) from `randomchecks`);
			-- Insert verified quantities
			insert into `randomcheckverification`(`randomcheckid`,`stemsize`,`quantity`)
			select $id,`stemsize`,`quantity` from `temprandomcheckverification` where `refno`=$refno;
			-- Insert Faults
			insert into `randomchecksfaults`(`randomcheckid`,`faultid`,`quantity`)
			select $id,`faultid`,`quantity` from `temprandomcheckfaults` where `refno`=$refno;
			
			-- Remove the temporary data
			delete from `temprandomcheckverification` where refno=$refno;
			delete from `temprandomcheckfaults` where refno=$refno;
		else
			update `randomchecks` set `varietyid`=$varietyid,`stemlengthid`=$stemlength,`counted`=$counted,`unitid`=$unitid,`remarks`=$remarks,`receivingid`=$receivingid
			where `id`=$id;
			-- remove faults and verification
			delete from `randomcheckverification` where `randomcheckid`=$id;
			delete from `randomchecksfaults` where `randomcheckid`=$id;
			-- Insert verified quantities
			INSERT INTO `randomcheckverification`(`randomcheckid`,`stemsize`,`quantity`)
			SELECT $id,`stemsize`,`quantity` FROM `temprandomcheckverification` WHERE `refno`=$refno;
			-- Insert Faults
			INSERT INTO `randomchecksfaults`(`randomcheckid`,`faultid`,`quantity`)
			SELECT $id,`faultid`,`quantity` FROM `temprandomcheckfaults` WHERE `refno`=$refno;
		end if;
	
	
	END */$$
DELIMITER ;

/* Procedure structure for procedure `spsavereceivinginventory` */

/*!50003 DROP PROCEDURE IF EXISTS  `spsavereceivinginventory` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spsavereceivinginventory`($refno varchar(50),$userid int)
BEGIN
	insert into `receivinginventory`(`unitid`,`driverid`,`date`,`pickingdate`,`collectiondate`,`varietyid`,`stemlengthid`,`quantity`,`fullbucket`,`bucketcapacity`,`addedby`,`tagid`,`tagactive`)
	select `unitid`,`driverid`,now(),`pickingdate`,`deliverydate`,`varietyid`,`stemlengthid`,`quantity`,`fullbucket`,`bucketcapacity`,$userid,`tagid`,1
	from `tempreceivinginventory` where refno=$refno;
	
	-- Disable Tags from collection inventory
	update `collection` set tagactive=0 where tagid in(select `tagid` from `tempreceivinginventory` where `refno`=$refno) and tagactive=1;
	-- Remove temporary data 
	delete from `tempreceivinginventory` where `refno`=$refno;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spsaverole` */

/*!50003 DROP PROCEDURE IF EXISTS  `spsaverole` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spsaverole`($roleid int,$rolename varchar(50),$roledescription varchar(500),$addedby int)
BEGIN
	if $roleid=0 then 
		insert into `roles`(`rolename`,`roledescription`,`addedby`,`dateadded`)
		values($rolename,$roledescription,$addedby,now());
		set $roleid=(select max(`id`) from `roles`);
	else
		update `roles` set `rolename`=$rolename,`roledescription`=$roledescription 
		where `id`=$roleid;
	end if;
	select $roleid as `roleid`;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spsaveroleuser` */

/*!50003 DROP PROCEDURE IF EXISTS  `spsaveroleuser` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spsaveroleuser`($userid int,$roleid int,$addedby int)
BEGIN
	if not exists(select * from `roleusers` where `userid`=$userid and `roleid`=$roleid) then
		insert into `roleusers`(`roleid`,`userid`,`dateadded`,`addedby`,`active`)
		values($roleid,$userid,now(),$addedby,1);
	else
		update `roleusers` set `active`=1 where `roleid`=$roleid and `userid`=$userid;
	end if;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spsavesmsconfiguration` */

/*!50003 DROP PROCEDURE IF EXISTS  `spsavesmsconfiguration` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spsavesmsconfiguration`($senderid varchar(50),$username varchar(50),$apikey varchar(100))
BEGIN
	if not exists(select * from `smsconfiguration`) then 
		insert into `smsconfiguration`(`senderid`,`username`,`apikey`)
		values($senderid,$username,$apikey);
	else
		update `smsconfiguration` set `senderid`=$senderid,`username`=$username,`apikey`=$apikey;
	end if;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spsavetempcollection` */

/*!50003 DROP PROCEDURE IF EXISTS  `spsavetempcollection` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spsavetempcollection`($refno varchar(50),$unitid int, $varietyid int,$stemlength int,$quantity numeric(18,2),
	$driverid int, $bucketcapacity int,$fullbucket boolean,$pickingdate DATETIME,$deliverydate DATETIME,$tagid int)
BEGIN
	insert into `tempcollection`(`refno`,`unitid`,`varietyid`,`stemlength`,`quantity`,`driverid`,`bucketcapacity`,`fullbucket`,`pickingdate`,`deliverydate`,`tagid`)
	values($refno,$unitid,$varietyid,$stemlength,$quantity,$driverid,$bucketcapacity,$fullbucket,$pickingdate,$deliverydate,$tagid);
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spsavetempcustomerorderdetails` */

/*!50003 DROP PROCEDURE IF EXISTS  `spsavetempcustomerorderdetails` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spsavetempcustomerorderdetails`($refno varchar(50),$varietyid int,$stemlengthid int,$headsizeid int,$quantity int )
BEGIN
	if $headsizeid=0 then 
		set $headsizeid=NULL ;
	end if;
	
	insert into `tempcustomerorderdetails`(`refno`,`varietyid`,`stemlengthid`,`headsizeid`,`quantity`)
	values($refno,$varietyid,$stemlengthid,$headsizeid,$quantity);
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spsavetempgradinghallinventory` */

/*!50003 DROP PROCEDURE IF EXISTS  `spsavetempgradinghallinventory` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spsavetempgradinghallinventory`($refno varchar(50),$varietyid int,$stemlengthid int,$quantity int,$fullbucket boolean, $bucketcapacity int,$receivingid int)
BEGIN
	insert into `tempgradinghallinventory`(`refno`,`varietyid`,`stemlengthid`,`quantity`,`fullbucket`,`bucketcapacity`,`receivingid`)
	values($refno,$varietyid,$stemlengthid,$quantity,$fullbucket,$bucketcapacity,$receivingid);
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spsavetempgradingreject` */

/*!50003 DROP PROCEDURE IF EXISTS  `spsavetempgradingreject` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spsavetempgradingreject`($refno varchar(50),$varietyid int,$buncherid int,$rejectid int,$quantity int)
BEGIN
	insert into `tempgradingreject`(`refno`,`varietyid`,`buncherid`,`quantity`,`rejectid`)
	values($refno,$varietyid,$buncherid,$quantity,$rejectid);
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spsavetempgradingstorageinventory` */

/*!50003 DROP PROCEDURE IF EXISTS  `spsavetempgradingstorageinventory` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spsavetempgradingstorageinventory`($refno varchar(50),$varietyid int, $bunchingstyleid int, $stemlengthid int,$headsizeid int,$quantity int)
BEGIN
	insert into `tempgradingstorageinventory`(`refno`,`varietyid`,`bunchstyleid`,`headsizeid`,`stemlengthid`,`quantity`)
	values($refno,$varietyid,$bunchingstyleid,$headsizeid,$stemlengthid,$quantity);
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spsavetempprivilege` */

/*!50003 DROP PROCEDURE IF EXISTS  `spsavetempprivilege` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spsavetempprivilege`($category varchar(50),$refno varchar(100), $itemid int,$objectid int, $valid boolean)
BEGIN
	if $category='user' then
		insert into `tempuserprivileges`(`refno`,`userid`,`objectid`,`valid`)
		values($refno,$itemid,$objectid,$valid);
	else
		insert into `temproleprivileges`(`refno`,`roleid`,`objectid`,`valid`)
		values($refno,$itemid,$objectid,$valid);
	end if;
		
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spsavetemprandomcheckfaults` */

/*!50003 DROP PROCEDURE IF EXISTS  `spsavetemprandomcheckfaults` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spsavetemprandomcheckfaults`($refno varchar(50),$faultid int,$quantity int)
BEGIN
	insert into `temprandomcheckfaults`(`refno`,`faultid`,`quantity`)
	values($refno,$faultid,$quantity);
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spsavetemprandomchecks` */

/*!50003 DROP PROCEDURE IF EXISTS  `spsavetemprandomchecks` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spsavetemprandomchecks`($refno varchar(50),$unitid int, $varietyid int, $stemlengthid int, $reported float, $verified float)
BEGIN
	insert into `temprandomchecks`(`refno`,`unitid`,`varietyid`,`stemlengthid`,`verified`,`counted`)
	values($refno,$unitid,$varietyid,$stemlengthid,$verified,$reported);
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spsavetemprandomcheckverification` */

/*!50003 DROP PROCEDURE IF EXISTS  `spsavetemprandomcheckverification` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spsavetemprandomcheckverification`($refno varchar(50),$stemlength int,$quantity int)
BEGIN
	insert into `temprandomcheckverification`(`refno`,`stemsize`,`quantity`)
	values($refno,$stemlength,$quantity);
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spsavetempreceivinginventory` */

/*!50003 DROP PROCEDURE IF EXISTS  `spsavetempreceivinginventory` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spsavetempreceivinginventory`($refno varchar(50),$driverid int,$varietyid int,$unitid int,$stemlengthid int,$tagid int,$pickingdate datetime,$collectiondate datetime,$quantity int,$fullbucket boolean,$bucketcapacity int)
BEGIN
	insert  into `tempreceivinginventory`(`refno`,`varietyid`,`unitid`,`stemlengthid`,`tagid`,`pickingdate`,`deliverydate`,`quantity`,`fullbucket`,`bucketcapacity`,`driverid`)
	values($refno,$varietyid,$unitid,$stemlengthid,$tagid,$pickingdate,$collectiondate,$quantity,$fullbucket,$bucketcapacity,$driverid);
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spsavetempunitvarieties` */

/*!50003 DROP PROCEDURE IF EXISTS  `spsavetempunitvarieties` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spsavetempunitvarieties`($refno varchar(50),$unitid int, $varietyid int)
BEGIN
	insert into `tempunitvarieties`(`refno`,`unitid`,`varietyid`)
	values($refno,$unitid,$varietyid);
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spsaveunitvarieties` */

/*!50003 DROP PROCEDURE IF EXISTS  `spsaveunitvarieties` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spsaveunitvarieties`($refno varchar(50),$unitid int)
BEGIN
	-- remove all existing units
	DELETE FROM `unitvarieties` WHERE `unitid`=$unitid;
	-- get all set units from tempunitsvarieties
	INSERT INTO `unitvarieties`(`unitid`,`varietyid`,`valid`)
	SELECT `unitid`,`varietyid`,1 FROM `tempunitvarieties` WHERE `refno`=$refno;
	-- delete temporary unit varieties
	DELETE FROM `tempunitvarieties` WHERE `refno`=$refno;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spsaveuser` */

/*!50003 DROP PROCEDURE IF EXISTS  `spsaveuser` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spsaveuser`($userid int,$username varchar(50),$userpassword varchar(50),$mobile varchar(50),$email varchar(50),$firstname varchar(50),$lastname varchar(50),
	$systemadmin boolean,$changepasswordonlogon boolean,$accountexpires boolean,$accountexpirydate datetime,$departmentid int,$accountactive boolean,
	$addedby int)
BEGIN
	if $userid=0 then
		insert into `users` (`username`,`password`,`firstname`,`lastname`,`mobile`,`email`,`systemadmin`,`changepasswordonlogon`,`accountexpires`,`accountexpireson`,`accountactive`,`departmentid`,`addedby`)
		values($username,$userpassword,$firstname,$lastname,$mobile,$email,$systemadmin,$changepasswordonlogon,$accountexpires,$accountexpirydate,$accountactive,$departmentid,$addedby);
		set $userid=(select max(`userid`) from `users`);
	else
		update `users` set `username`=$username,`firstname`=$firstname,`lastname`=$lastname,`mobile`=$mobile,`email`=$email,`systemadmin`=$systemadmin,
		`changepasswordonlogon`=$changepasswordonlogon,`accountexpires`=$accountexpires,`accountexpireson`=$accountexpirydate,
		`accountactive`=$accountactive,`departmentid`=$departmentid
		where `userid`=$userid;
	end if;
	select $userid as userid;
    END */$$
DELIMITER ;

/* Procedure structure for procedure `spvalidateuserprivilege` */

/*!50003 DROP PROCEDURE IF EXISTS  `spvalidateuserprivilege` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spvalidateuserprivilege`($userid int,$objectid int)
BEGIN
	-- Check if user is an admin
	if exists (select * from `users` where `userid`=$userid and `systemadmin`=1) then 
		select 1 as valid;
	-- Check if user belongs to a role with the privilege
	elseif exists(select * from `roleusers` u,`roleprivileges` p where u.roleid=p.`roleid` and u.`userid`=$userid and p.`objectid`=$objectid and `valid`=1) then
		select 1 as valid;
	-- check if the user has the role
	elseif exists (select * from `userprivileges` where `userid`=$userid and `objectid`=$objectid and `valid`=1) then
		select 1 as valid;
	end if;
    END */$$
DELIMITER ;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
