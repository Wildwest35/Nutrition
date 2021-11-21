-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Εξυπηρετητής: 127.0.0.1
-- Χρόνος δημιουργίας: 21 Νοε 2021 στις 17:48:45
-- Έκδοση διακομιστή: 10.4.19-MariaDB
-- Έκδοση PHP: 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Βάση δεδομένων: `nutrition`
--

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `biometrics`
--

CREATE TABLE `biometrics` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `bmi` float NOT NULL,
  `bar` float NOT NULL,
  `runCalories` float NOT NULL,
  `waterBodyAmount` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `createdfood`
--

CREATE TABLE `createdfood` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `idFood` int(11) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `dailyconsumptiongoals`
--

CREATE TABLE `dailyconsumptiongoals` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `calories` float NOT NULL,
  `protein` float NOT NULL,
  `carb` float NOT NULL,
  `fat` float NOT NULL,
  `water` float NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `dailyeatings`
--

CREATE TABLE `dailyeatings` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `idFood` int(11) NOT NULL,
  `idNameOfDailyMeals` int(11) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `dailysummaries`
--

CREATE TABLE `dailysummaries` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `idDailyConsumptionGoals` int(11) NOT NULL,
  `calories` float NOT NULL,
  `protein` float NOT NULL,
  `carb` float NOT NULL,
  `fat` float NOT NULL,
  `water` float NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `daysofweek`
--

CREATE TABLE `daysofweek` (
  `id` int(11) NOT NULL,
  `days` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `dietprograms`
--

CREATE TABLE `dietprograms` (
  `id` int(11) NOT NULL,
  `idNumberOfPrograms` int(11) NOT NULL,
  `idNameOfDailyMeals` int(11) NOT NULL,
  `idDaysOfWeek` int(11) NOT NULL,
  `idFood` int(11) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `fatpercentage`
--

CREATE TABLE `fatpercentage` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `fatPercentage` int(11) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `favourites`
--

CREATE TABLE `favourites` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `idFood` int(11) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `foods`
--

CREATE TABLE `foods` (
  `id` int(11) NOT NULL,
  `category` tinyint(1) NOT NULL,
  `name` varchar(64) NOT NULL,
  `portion` int(11) NOT NULL,
  `unit` int(11) NOT NULL,
  `calories` float NOT NULL,
  `protein` float NOT NULL,
  `carb` float NOT NULL,
  `fat` float NOT NULL,
  `saturated` float NOT NULL,
  `unsaturated` float NOT NULL,
  `sugar` float NOT NULL,
  `bitamins` float NOT NULL,
  `img` varchar(64) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `nameofdailymeals`
--

CREATE TABLE `nameofdailymeals` (
  `id` int(11) NOT NULL,
  `meals` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `nameofuserprograms`
--

CREATE TABLE `nameofuserprograms` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `numberofprograms`
--

CREATE TABLE `numberofprograms` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `idNameOfUserPrograms` int(11) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `category` tinyint(1) NOT NULL,
  `username` varchar(64) NOT NULL,
  `email` varchar(64) NOT NULL,
  `pass` varchar(64) NOT NULL,
  `sex` tinyint(1) NOT NULL,
  `age` int(11) NOT NULL,
  `weights` float NOT NULL,
  `height` int(11) NOT NULL,
  `isIncreaseWeight` tinyint(1) NOT NULL,
  `requestedWeight` int(11) NOT NULL,
  `dateCreated` datetime NOT NULL,
  `isConfirmAccount` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `waterpercentage`
--

CREATE TABLE `waterpercentage` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `waterPercentage` int(11) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `weight`
--

CREATE TABLE `weight` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `weight` float NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `weightbone`
--

CREATE TABLE `weightbone` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `weightBone` float NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Ευρετήρια για άχρηστους πίνακες
--

--
-- Ευρετήρια για πίνακα `biometrics`
--
ALTER TABLE `biometrics`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUser` (`idUser`);

--
-- Ευρετήρια για πίνακα `createdfood`
--
ALTER TABLE `createdfood`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUser` (`idUser`),
  ADD KEY `idFood` (`idFood`);

--
-- Ευρετήρια για πίνακα `dailyconsumptiongoals`
--
ALTER TABLE `dailyconsumptiongoals`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUser` (`idUser`);

--
-- Ευρετήρια για πίνακα `dailyeatings`
--
ALTER TABLE `dailyeatings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUser` (`idUser`),
  ADD KEY `idFood` (`idFood`),
  ADD KEY `idNameOfDailyMeals` (`idNameOfDailyMeals`);

--
-- Ευρετήρια για πίνακα `dailysummaries`
--
ALTER TABLE `dailysummaries`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUser` (`idUser`),
  ADD KEY `idDailyConsumptionGoals` (`idDailyConsumptionGoals`);

--
-- Ευρετήρια για πίνακα `daysofweek`
--
ALTER TABLE `daysofweek`
  ADD PRIMARY KEY (`id`);

--
-- Ευρετήρια για πίνακα `dietprograms`
--
ALTER TABLE `dietprograms`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idDaysOfWeek` (`idDaysOfWeek`),
  ADD KEY `idFood` (`idFood`),
  ADD KEY `idNameOfDailyMeals` (`idNameOfDailyMeals`),
  ADD KEY `idNumberOfPrograms` (`idNumberOfPrograms`);

--
-- Ευρετήρια για πίνακα `fatpercentage`
--
ALTER TABLE `fatpercentage`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUser` (`idUser`);

--
-- Ευρετήρια για πίνακα `favourites`
--
ALTER TABLE `favourites`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idFood` (`idFood`),
  ADD KEY `idUser` (`idUser`);

--
-- Ευρετήρια για πίνακα `foods`
--
ALTER TABLE `foods`
  ADD PRIMARY KEY (`id`);

--
-- Ευρετήρια για πίνακα `nameofdailymeals`
--
ALTER TABLE `nameofdailymeals`
  ADD PRIMARY KEY (`id`);

--
-- Ευρετήρια για πίνακα `nameofuserprograms`
--
ALTER TABLE `nameofuserprograms`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUser` (`idUser`);

--
-- Ευρετήρια για πίνακα `numberofprograms`
--
ALTER TABLE `numberofprograms`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUser` (`idUser`),
  ADD KEY `idNameOfUserPrograms` (`idNameOfUserPrograms`);

--
-- Ευρετήρια για πίνακα `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`,`username`);

--
-- Ευρετήρια για πίνακα `waterpercentage`
--
ALTER TABLE `waterpercentage`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUser` (`idUser`);

--
-- Ευρετήρια για πίνακα `weight`
--
ALTER TABLE `weight`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUser` (`idUser`);

--
-- Ευρετήρια για πίνακα `weightbone`
--
ALTER TABLE `weightbone`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUser` (`idUser`);

--
-- AUTO_INCREMENT για άχρηστους πίνακες
--

--
-- AUTO_INCREMENT για πίνακα `biometrics`
--
ALTER TABLE `biometrics`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT για πίνακα `createdfood`
--
ALTER TABLE `createdfood`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT για πίνακα `dailyconsumptiongoals`
--
ALTER TABLE `dailyconsumptiongoals`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT για πίνακα `dailyeatings`
--
ALTER TABLE `dailyeatings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT για πίνακα `dailysummaries`
--
ALTER TABLE `dailysummaries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT για πίνακα `daysofweek`
--
ALTER TABLE `daysofweek`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT για πίνακα `dietprograms`
--
ALTER TABLE `dietprograms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT για πίνακα `fatpercentage`
--
ALTER TABLE `fatpercentage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT για πίνακα `favourites`
--
ALTER TABLE `favourites`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT για πίνακα `foods`
--
ALTER TABLE `foods`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT για πίνακα `nameofdailymeals`
--
ALTER TABLE `nameofdailymeals`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT για πίνακα `nameofuserprograms`
--
ALTER TABLE `nameofuserprograms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT για πίνακα `numberofprograms`
--
ALTER TABLE `numberofprograms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT για πίνακα `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT για πίνακα `waterpercentage`
--
ALTER TABLE `waterpercentage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT για πίνακα `weight`
--
ALTER TABLE `weight`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT για πίνακα `weightbone`
--
ALTER TABLE `weightbone`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Περιορισμοί για άχρηστους πίνακες
--

--
-- Περιορισμοί για πίνακα `biometrics`
--
ALTER TABLE `biometrics`
  ADD CONSTRAINT `biometrics_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Περιορισμοί για πίνακα `createdfood`
--
ALTER TABLE `createdfood`
  ADD CONSTRAINT `createdfood_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `createdfood_ibfk_2` FOREIGN KEY (`idFood`) REFERENCES `foods` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Περιορισμοί για πίνακα `dailyconsumptiongoals`
--
ALTER TABLE `dailyconsumptiongoals`
  ADD CONSTRAINT `dailyconsumptiongoals_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Περιορισμοί για πίνακα `dailyeatings`
--
ALTER TABLE `dailyeatings`
  ADD CONSTRAINT `dailyeatings_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `dailyeatings_ibfk_2` FOREIGN KEY (`idFood`) REFERENCES `foods` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `dailyeatings_ibfk_3` FOREIGN KEY (`idNameOfDailyMeals`) REFERENCES `nameofdailymeals` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Περιορισμοί για πίνακα `dailysummaries`
--
ALTER TABLE `dailysummaries`
  ADD CONSTRAINT `dailysummaries_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `dailysummaries_ibfk_2` FOREIGN KEY (`idDailyConsumptionGoals`) REFERENCES `dailyconsumptiongoals` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Περιορισμοί για πίνακα `dietprograms`
--
ALTER TABLE `dietprograms`
  ADD CONSTRAINT `dietprograms_ibfk_1` FOREIGN KEY (`idDaysOfWeek`) REFERENCES `daysofweek` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `dietprograms_ibfk_2` FOREIGN KEY (`idFood`) REFERENCES `foods` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `dietprograms_ibfk_3` FOREIGN KEY (`idNameOfDailyMeals`) REFERENCES `nameofdailymeals` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `dietprograms_ibfk_4` FOREIGN KEY (`idNumberOfPrograms`) REFERENCES `numberofprograms` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Περιορισμοί για πίνακα `fatpercentage`
--
ALTER TABLE `fatpercentage`
  ADD CONSTRAINT `fatpercentage_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Περιορισμοί για πίνακα `favourites`
--
ALTER TABLE `favourites`
  ADD CONSTRAINT `favourites_ibfk_1` FOREIGN KEY (`idFood`) REFERENCES `foods` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `favourites_ibfk_2` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Περιορισμοί για πίνακα `nameofuserprograms`
--
ALTER TABLE `nameofuserprograms`
  ADD CONSTRAINT `nameofuserprograms_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Περιορισμοί για πίνακα `numberofprograms`
--
ALTER TABLE `numberofprograms`
  ADD CONSTRAINT `numberofprograms_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `numberofprograms_ibfk_2` FOREIGN KEY (`idNameOfUserPrograms`) REFERENCES `nameofuserprograms` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Περιορισμοί για πίνακα `waterpercentage`
--
ALTER TABLE `waterpercentage`
  ADD CONSTRAINT `waterpercentage_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Περιορισμοί για πίνακα `weight`
--
ALTER TABLE `weight`
  ADD CONSTRAINT `weight_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Περιορισμοί για πίνακα `weightbone`
--
ALTER TABLE `weightbone`
  ADD CONSTRAINT `weightbone_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
