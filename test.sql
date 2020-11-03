-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 03, 2020 at 05:38 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `login_attempts`
--

CREATE TABLE `login_attempts` (
  `id` int(11) NOT NULL,
  `ip_address` varchar(111) NOT NULL,
  `login` varchar(51) NOT NULL,
  `time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `login_attempts`
--

INSERT INTO `login_attempts` (`id`, `ip_address`, `login`, `time`) VALUES
(7, '::1', 'hello3@123.com', '2020-11-02 19:14:16'),
(8, '::1', 'hello3@123.com', '2020-11-02 19:14:39');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_apidata`
--

CREATE TABLE `tbl_apidata` (
  `id` int(11) NOT NULL,
  `title` text DEFAULT NULL,
  `author` text DEFAULT NULL,
  `points` varchar(111) DEFAULT NULL,
  `story_text` text DEFAULT NULL,
  `userid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_apidata`
--

INSERT INTO `tbl_apidata` (`id`, `title`, `author`, `points`, `story_text`, `userid`) VALUES
(1, 'Stephen Hawking has died', 'Cogito', '6015', NULL, 6),
(2, 'A Message to Our Customers', 'epaga', '5771', NULL, 6),
(3, 'Steve Jobs has passed away.', 'patricktomas', '4271', '', 6),
(4, 'YouTube-dl has received a DMCA takedown from RIAA', 'phantop', '4239', NULL, 6),
(5, 'Reflecting on one very, very strange year at Uber', 'grey-area', '4107', NULL, 6),
(6, 'Bye, Amazon', 'grey-area', '3816', NULL, 6),
(7, 'Every Google result now looks like an ad', 'cmod', '3592', NULL, 6),
(8, 'F.C.C. Repeals Net Neutrality Rules', 'panny', '3384', NULL, 6),
(9, 'Show HN: This up votes itself', 'olalonde', '3381', '', 6),
(10, 'Switch from Chrome to Firefox', 'WisNorCan', '3287', NULL, 6),
(11, NULL, 'zedshaw', '1081', NULL, 7),
(12, '', 'avalaunch', '676', NULL, 7),
(13, '', 'sivers', '447', NULL, 7),
(14, NULL, 'mattmight', '445', NULL, 7),
(15, NULL, 'jbk', '436', NULL, 7),
(16, NULL, '6cxs2hd6', '431', NULL, 7),
(17, NULL, 'lawl', '427', NULL, 7),
(18, NULL, 'shasta', '410', NULL, 7),
(19, '', 'jbk', '407', NULL, 7),
(20, '', 'mapgrep', '397', NULL, 7),
(31, NULL, 'zedshaw', '1081', NULL, 9),
(32, '', 'avalaunch', '676', NULL, 9),
(33, '', 'sivers', '447', NULL, 9),
(34, NULL, 'mattmight', '445', NULL, 9),
(35, NULL, 'jbk', '436', NULL, 9),
(36, NULL, '6cxs2hd6', '431', NULL, 9),
(37, NULL, 'lawl', '427', NULL, 9),
(38, NULL, 'shasta', '410', NULL, 9),
(39, '', 'jbk', '407', NULL, 9),
(40, '', 'mapgrep', '397', NULL, 9),
(41, NULL, 'zedshaw', '1081', NULL, 10),
(42, '', 'avalaunch', '676', NULL, 10),
(43, '', 'sivers', '447', NULL, 10),
(44, NULL, 'mattmight', '445', NULL, 10),
(45, NULL, 'jbk', '436', NULL, 10),
(46, NULL, '6cxs2hd6', '431', NULL, 10),
(47, NULL, 'lawl', '427', NULL, 10),
(48, NULL, 'shasta', '410', NULL, 10),
(49, '', 'jbk', '407', NULL, 10),
(50, '', 'mapgrep', '397', NULL, 10),
(51, 'Poll: What\'s Your Favorite Programming Language?', 'GreekOphion', '2321', 'What\'s your favortie programming langauge?<p>Below are the most popular languages. If your favorite isn\'t below select other and comment what it is below.<p>Note: By voting for a language you are not up voting this poll. Please up vote this poll to keep it alive.', 11),
(52, 'Poll: Where are you currently living?', 'Systemic33', '1098', 'An interesting question, that was last asked according to search, 3,4 and respectively 5 years ago. [1,2,3]<p>Please read through the list, to find the choice that describes you the best.<p>I&#x27;ve tried to be more precise than just continents, but still not every country, but rather regions, more or less divided by culture.\\nI apologize if anyone feel left out, please leave a comment then with what region&#x2F;country that you feel is significant enough to warrant it&#x27;s own choice.<p>[1] https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=527681<p>[2] http:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=1640384<p>[3] http:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=235585<p>Remember to upvote the Poll itself, for better results.', 11),
(53, 'Poll: How long have you been programming?', 'michaelkscott', '992', '', 11),
(54, 'Poll: HN readers, where\'s your residence?', 'sasvari', '764', 'So fellow HN readers, where have you set up your residence?<p>(I\'m aware of the fact that the majority is located in the US, but it might still be interesting to see if the HN community is getting more international.)<p>(Edit: NYC and SF area choice; England -&#62; UK; split up Asia;Australia/+Oceania)', 11),
(55, 'Poll: Do you think HN should go dark in protest of SOPA?', 'zitterbewegung', '759', 'I think Hacker News should stand with reddit to go dark in support of SOPA. SOPA seems very important for the future of HN and startups associated with ycombinator.', 11),
(56, 'Poll: Full-time software engineers in the Bay Area, what\'s your annual salary?', 'kanzure', '718', 'This poll is targeting current full-time software engineers and software developers in San Francisco and the Bay Area.<p>The previous polls seem to have topped out too low. So here we are again.<p>Specifically, base salary only. Pre-tax. No options, shares, bonuses, adjustments for inflation, or benefits.<p>(Don\'t forget to up-vote the poll to get more data.)', 11),
(57, 'Poll: What database does your company use?', 'daniel_levine', '686', '<i></i>Upvote please if you think it\'s an interesting question so that more people will respond<i></i><p>Last year I asked this question (http://news.ycombinator.com/item?id=1411937) and I think it was useful to a bunch of people. Figured it\'s worth asking again and the diffs will be interesting.', 11),
(58, 'Poll: What are your liked and disliked programming languages?', 'wting', '683', 'This is a combination of these two polls:<p><pre><code>    https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=3746692\\n    https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=3748961\\n</code></pre>\\nThat resulted in this chart:<p><pre><code>    https:&#x2F;&#x2F;i.imgur.com&#x2F;toGKy21.jpg\\n</code></pre>\\nSince that poll is ~18 months old, I thought an update is in order.<p>This poll also adds a few new choices: F#, Go, R, and Rust.<p>Vote as many choices as you&#x27;d like.<p>Note: By voting for a language you are not up voting this poll. Please up vote this poll to keep it alive.', 11),
(59, 'Poll: Should HN display comment scores?', 'pg', '606', 'It\'s now been long enough since I hid comment scores that we know\\nwhat the site will be like without them.  Do you prefer the site\\nnow or the way it used to be?<p>I hid comment scores after tptacek suggested it as a way to reduce\\narguments.  There was a nasty kind of argument that used to happen,\\nwhere people would literally try to score points off one another,\\nand users voting on the thread became like a mob egging on two\\npeople fighting. I prefer HN without comment scores, because those\\nfights really disturbed me, and they\'ve practically gone away since\\nI hid comment scores.<p>I realize there is another side to the story, though.  Lots of\\npeople have complained that without comment scores it\'s harder to\\npick out the good comments.  Some say that\'s better, because now\\nyou have to judge a comment for itself.  On the other hand, with\\nsufficient discipline one could presumably judge a comment for\\nitself despite seeing the score.<p>Last time I tried asking this question, the voting was roughly even.\\nI\'m curious if there has been any drift toward a consensus.', 11),
(60, 'Poll: Do you test your code?', 'petenixey', '605', 'Do you have tests that run every time you push and ensure that the functionality on your site works?<p>There\'s always a lot of debate around testing and I\'m interested to see how much people do and how satisfied they are with it<p>IF YOU\'D LIKE TO ENCOURAGE OTHERS TO ANSWER, PLEASE UPVOTE - TY', 11),
(61, 'Poll: What\'s Your Favorite Programming Language?', 'GreekOphion', '2321', 'What\'s your favortie programming langauge?<p>Below are the most popular languages. If your favorite isn\'t below select other and comment what it is below.<p>Note: By voting for a language you are not up voting this poll. Please up vote this poll to keep it alive.', 12),
(62, 'Poll: Where are you currently living?', 'Systemic33', '1098', 'An interesting question, that was last asked according to search, 3,4 and respectively 5 years ago. [1,2,3]<p>Please read through the list, to find the choice that describes you the best.<p>I&#x27;ve tried to be more precise than just continents, but still not every country, but rather regions, more or less divided by culture.\\nI apologize if anyone feel left out, please leave a comment then with what region&#x2F;country that you feel is significant enough to warrant it&#x27;s own choice.<p>[1] https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=527681<p>[2] http:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=1640384<p>[3] http:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=235585<p>Remember to upvote the Poll itself, for better results.', 12),
(63, 'Poll: How long have you been programming?', 'michaelkscott', '992', '', 12),
(64, 'Poll: HN readers, where\'s your residence?', 'sasvari', '764', 'So fellow HN readers, where have you set up your residence?<p>(I\'m aware of the fact that the majority is located in the US, but it might still be interesting to see if the HN community is getting more international.)<p>(Edit: NYC and SF area choice; England -&#62; UK; split up Asia;Australia/+Oceania)', 12),
(65, 'Poll: Do you think HN should go dark in protest of SOPA?', 'zitterbewegung', '759', 'I think Hacker News should stand with reddit to go dark in support of SOPA. SOPA seems very important for the future of HN and startups associated with ycombinator.', 12),
(66, 'Poll: Full-time software engineers in the Bay Area, what\'s your annual salary?', 'kanzure', '718', 'This poll is targeting current full-time software engineers and software developers in San Francisco and the Bay Area.<p>The previous polls seem to have topped out too low. So here we are again.<p>Specifically, base salary only. Pre-tax. No options, shares, bonuses, adjustments for inflation, or benefits.<p>(Don\'t forget to up-vote the poll to get more data.)', 12),
(67, 'Poll: What database does your company use?', 'daniel_levine', '686', '<i></i>Upvote please if you think it\'s an interesting question so that more people will respond<i></i><p>Last year I asked this question (http://news.ycombinator.com/item?id=1411937) and I think it was useful to a bunch of people. Figured it\'s worth asking again and the diffs will be interesting.', 12),
(68, 'Poll: What are your liked and disliked programming languages?', 'wting', '683', 'This is a combination of these two polls:<p><pre><code>    https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=3746692\\n    https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=3748961\\n</code></pre>\\nThat resulted in this chart:<p><pre><code>    https:&#x2F;&#x2F;i.imgur.com&#x2F;toGKy21.jpg\\n</code></pre>\\nSince that poll is ~18 months old, I thought an update is in order.<p>This poll also adds a few new choices: F#, Go, R, and Rust.<p>Vote as many choices as you&#x27;d like.<p>Note: By voting for a language you are not up voting this poll. Please up vote this poll to keep it alive.', 12),
(69, 'Poll: Should HN display comment scores?', 'pg', '606', 'It\'s now been long enough since I hid comment scores that we know\\nwhat the site will be like without them.  Do you prefer the site\\nnow or the way it used to be?<p>I hid comment scores after tptacek suggested it as a way to reduce\\narguments.  There was a nasty kind of argument that used to happen,\\nwhere people would literally try to score points off one another,\\nand users voting on the thread became like a mob egging on two\\npeople fighting. I prefer HN without comment scores, because those\\nfights really disturbed me, and they\'ve practically gone away since\\nI hid comment scores.<p>I realize there is another side to the story, though.  Lots of\\npeople have complained that without comment scores it\'s harder to\\npick out the good comments.  Some say that\'s better, because now\\nyou have to judge a comment for itself.  On the other hand, with\\nsufficient discipline one could presumably judge a comment for\\nitself despite seeing the score.<p>Last time I tried asking this question, the voting was roughly even.\\nI\'m curious if there has been any drift toward a consensus.', 12),
(70, 'Poll: Do you test your code?', 'petenixey', '605', 'Do you have tests that run every time you push and ensure that the functionality on your site works?<p>There\'s always a lot of debate around testing and I\'m interested to see how much people do and how satisfied they are with it<p>IF YOU\'D LIKE TO ENCOURAGE OTHERS TO ANSWER, PLEASE UPVOTE - TY', 12),
(71, 'Poll: What\'s Your Favorite Programming Language?', 'GreekOphion', '2321', 'What\'s your favortie programming langauge?<p>Below are the most popular languages. If your favorite isn\'t below select other and comment what it is below.<p>Note: By voting for a language you are not up voting this poll. Please up vote this poll to keep it alive.', 13),
(72, 'Poll: Where are you currently living?', 'Systemic33', '1098', 'An interesting question, that was last asked according to search, 3,4 and respectively 5 years ago. [1,2,3]<p>Please read through the list, to find the choice that describes you the best.<p>I&#x27;ve tried to be more precise than just continents, but still not every country, but rather regions, more or less divided by culture.\\nI apologize if anyone feel left out, please leave a comment then with what region&#x2F;country that you feel is significant enough to warrant it&#x27;s own choice.<p>[1] https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=527681<p>[2] http:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=1640384<p>[3] http:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=235585<p>Remember to upvote the Poll itself, for better results.', 13),
(73, 'Poll: How long have you been programming?', 'michaelkscott', '992', '', 13),
(74, 'Poll: HN readers, where\'s your residence?', 'sasvari', '764', 'So fellow HN readers, where have you set up your residence?<p>(I\'m aware of the fact that the majority is located in the US, but it might still be interesting to see if the HN community is getting more international.)<p>(Edit: NYC and SF area choice; England -&#62; UK; split up Asia;Australia/+Oceania)', 13),
(75, 'Poll: Do you think HN should go dark in protest of SOPA?', 'zitterbewegung', '759', 'I think Hacker News should stand with reddit to go dark in support of SOPA. SOPA seems very important for the future of HN and startups associated with ycombinator.', 13),
(76, 'Poll: Full-time software engineers in the Bay Area, what\'s your annual salary?', 'kanzure', '718', 'This poll is targeting current full-time software engineers and software developers in San Francisco and the Bay Area.<p>The previous polls seem to have topped out too low. So here we are again.<p>Specifically, base salary only. Pre-tax. No options, shares, bonuses, adjustments for inflation, or benefits.<p>(Don\'t forget to up-vote the poll to get more data.)', 13),
(77, 'Poll: What database does your company use?', 'daniel_levine', '686', '<i></i>Upvote please if you think it\'s an interesting question so that more people will respond<i></i><p>Last year I asked this question (http://news.ycombinator.com/item?id=1411937) and I think it was useful to a bunch of people. Figured it\'s worth asking again and the diffs will be interesting.', 13),
(78, 'Poll: What are your liked and disliked programming languages?', 'wting', '683', 'This is a combination of these two polls:<p><pre><code>    https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=3746692\\n    https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=3748961\\n</code></pre>\\nThat resulted in this chart:<p><pre><code>    https:&#x2F;&#x2F;i.imgur.com&#x2F;toGKy21.jpg\\n</code></pre>\\nSince that poll is ~18 months old, I thought an update is in order.<p>This poll also adds a few new choices: F#, Go, R, and Rust.<p>Vote as many choices as you&#x27;d like.<p>Note: By voting for a language you are not up voting this poll. Please up vote this poll to keep it alive.', 13),
(79, 'Poll: Should HN display comment scores?', 'pg', '606', 'It\'s now been long enough since I hid comment scores that we know\\nwhat the site will be like without them.  Do you prefer the site\\nnow or the way it used to be?<p>I hid comment scores after tptacek suggested it as a way to reduce\\narguments.  There was a nasty kind of argument that used to happen,\\nwhere people would literally try to score points off one another,\\nand users voting on the thread became like a mob egging on two\\npeople fighting. I prefer HN without comment scores, because those\\nfights really disturbed me, and they\'ve practically gone away since\\nI hid comment scores.<p>I realize there is another side to the story, though.  Lots of\\npeople have complained that without comment scores it\'s harder to\\npick out the good comments.  Some say that\'s better, because now\\nyou have to judge a comment for itself.  On the other hand, with\\nsufficient discipline one could presumably judge a comment for\\nitself despite seeing the score.<p>Last time I tried asking this question, the voting was roughly even.\\nI\'m curious if there has been any drift toward a consensus.', 13),
(80, 'Poll: Do you test your code?', 'petenixey', '605', 'Do you have tests that run every time you push and ensure that the functionality on your site works?<p>There\'s always a lot of debate around testing and I\'m interested to see how much people do and how satisfied they are with it<p>IF YOU\'D LIKE TO ENCOURAGE OTHERS TO ANSWER, PLEASE UPVOTE - TY', 13),
(91, 'Poll: What\'s Your Favorite Programming Language?', 'GreekOphion', '2321', 'What\'s your favortie programming langauge?<p>Below are the most popular languages. If your favorite isn\'t below select other and comment what it is below.<p>Note: By voting for a language you are not up voting this poll. Please up vote this poll to keep it alive.', 15),
(92, 'Poll: Where are you currently living?', 'Systemic33', '1098', 'An interesting question, that was last asked according to search, 3,4 and respectively 5 years ago. [1,2,3]<p>Please read through the list, to find the choice that describes you the best.<p>I&#x27;ve tried to be more precise than just continents, but still not every country, but rather regions, more or less divided by culture.\\nI apologize if anyone feel left out, please leave a comment then with what region&#x2F;country that you feel is significant enough to warrant it&#x27;s own choice.<p>[1] https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=527681<p>[2] http:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=1640384<p>[3] http:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=235585<p>Remember to upvote the Poll itself, for better results.', 15),
(93, 'Poll: How long have you been programming?', 'michaelkscott', '992', '', 15),
(94, 'Poll: HN readers, where\'s your residence?', 'sasvari', '764', 'So fellow HN readers, where have you set up your residence?<p>(I\'m aware of the fact that the majority is located in the US, but it might still be interesting to see if the HN community is getting more international.)<p>(Edit: NYC and SF area choice; England -&#62; UK; split up Asia;Australia/+Oceania)', 15),
(95, 'Poll: Do you think HN should go dark in protest of SOPA?', 'zitterbewegung', '759', 'I think Hacker News should stand with reddit to go dark in support of SOPA. SOPA seems very important for the future of HN and startups associated with ycombinator.', 15),
(96, 'Poll: Full-time software engineers in the Bay Area, what\'s your annual salary?', 'kanzure', '718', 'This poll is targeting current full-time software engineers and software developers in San Francisco and the Bay Area.<p>The previous polls seem to have topped out too low. So here we are again.<p>Specifically, base salary only. Pre-tax. No options, shares, bonuses, adjustments for inflation, or benefits.<p>(Don\'t forget to up-vote the poll to get more data.)', 15),
(97, 'Poll: What database does your company use?', 'daniel_levine', '686', '<i></i>Upvote please if you think it\'s an interesting question so that more people will respond<i></i><p>Last year I asked this question (http://news.ycombinator.com/item?id=1411937) and I think it was useful to a bunch of people. Figured it\'s worth asking again and the diffs will be interesting.', 15),
(98, 'Poll: What are your liked and disliked programming languages?', 'wting', '683', 'This is a combination of these two polls:<p><pre><code>    https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=3746692\\n    https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=3748961\\n</code></pre>\\nThat resulted in this chart:<p><pre><code>    https:&#x2F;&#x2F;i.imgur.com&#x2F;toGKy21.jpg\\n</code></pre>\\nSince that poll is ~18 months old, I thought an update is in order.<p>This poll also adds a few new choices: F#, Go, R, and Rust.<p>Vote as many choices as you&#x27;d like.<p>Note: By voting for a language you are not up voting this poll. Please up vote this poll to keep it alive.', 15),
(99, 'Poll: Should HN display comment scores?', 'pg', '606', 'It\'s now been long enough since I hid comment scores that we know\\nwhat the site will be like without them.  Do you prefer the site\\nnow or the way it used to be?<p>I hid comment scores after tptacek suggested it as a way to reduce\\narguments.  There was a nasty kind of argument that used to happen,\\nwhere people would literally try to score points off one another,\\nand users voting on the thread became like a mob egging on two\\npeople fighting. I prefer HN without comment scores, because those\\nfights really disturbed me, and they\'ve practically gone away since\\nI hid comment scores.<p>I realize there is another side to the story, though.  Lots of\\npeople have complained that without comment scores it\'s harder to\\npick out the good comments.  Some say that\'s better, because now\\nyou have to judge a comment for itself.  On the other hand, with\\nsufficient discipline one could presumably judge a comment for\\nitself despite seeing the score.<p>Last time I tried asking this question, the voting was roughly even.\\nI\'m curious if there has been any drift toward a consensus.', 15),
(100, 'Poll: Do you test your code?', 'petenixey', '605', 'Do you have tests that run every time you push and ensure that the functionality on your site works?<p>There\'s always a lot of debate around testing and I\'m interested to see how much people do and how satisfied they are with it<p>IF YOU\'D LIKE TO ENCOURAGE OTHERS TO ANSWER, PLEASE UPVOTE - TY', 15);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_masters`
--

CREATE TABLE `tbl_masters` (
  `id` int(11) NOT NULL,
  `role_id` varchar(50) NOT NULL,
  `role_name` varchar(11) NOT NULL,
  `email` varchar(111) NOT NULL,
  `full_name` varchar(100) NOT NULL,
  `firstname` varchar(111) NOT NULL,
  `lastname` varchar(111) NOT NULL,
  `phonenumber` varchar(111) NOT NULL,
  `dateofbirth` varchar(111) NOT NULL,
  `country` varchar(111) NOT NULL,
  `subscription` varchar(111) NOT NULL,
  `username` varchar(111) NOT NULL,
  `password` varchar(200) NOT NULL,
  `new_password_key` varchar(255) NOT NULL,
  `new_password_requested` datetime NOT NULL,
  `new_email` varchar(55) NOT NULL,
  `new_email_key` varchar(55) NOT NULL,
  `last_ip` varchar(55) NOT NULL,
  `last_login` datetime NOT NULL,
  `is_active` enum('active','inactive') NOT NULL,
  `update_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `register_date` date NOT NULL,
  `emailhash` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_masters`
--

INSERT INTO `tbl_masters` (`id`, `role_id`, `role_name`, `email`, `full_name`, `firstname`, `lastname`, `phonenumber`, `dateofbirth`, `country`, `subscription`, `username`, `password`, `new_password_key`, `new_password_requested`, `new_email`, `new_email_key`, `last_ip`, `last_login`, `is_active`, `update_date`, `register_date`, `emailhash`) VALUES
(1, '0', 'admin', 'test@test.com', '', '', '', '', '', '', '', '007', '$2a$08$96dbL42vYjseLJ2F.aFKlu8fdikIOIupvkOE96eb3.vBwQmIOhY5e', '', '0000-00-00 00:00:00', '', '', '::1', '2020-11-03 06:11:46', 'active', '2020-11-03 03:11:46', '0000-00-00', ''),
(4, '1', 'user', 'admin1@sd.com', 'SDdsasadsadsa', 'SDdsa', 'sadsadsa', '07222 555555', '01-11-2020', 'UK', 'comment', 'admin1@sd.com', '$2a$08$96dbL42vYjseLJ2F.aFKlu8fdikIOIupvkOE96eb3.vBwQmIOhY5e', '', '0000-00-00 00:00:00', '', '', '', '0000-00-00 00:00:00', 'inactive', '2020-11-03 02:59:27', '0000-00-00', ''),
(5, '1', 'user', 'admin@ewd.dfds', 'EWRTYUqwerqrwerew', 'EWRTYU', 'qwerqrwerew', '07222 555555', '27-10-2020', 'UK', 'story', 'admin@ewd.dfds', '', '', '0000-00-00 00:00:00', '', '', '', '0000-00-00 00:00:00', 'inactive', '2020-11-02 15:48:52', '0000-00-00', ''),
(6, '1', 'user', 'admin@ewd.dfdsQwer', 'EWRTYUqwerqrwerew', 'EWRTYU', 'qwerqrwerew', '07222 555555', '27-10-2020', 'UK', 'story', 'admin@ewd.dfdsQwer', '', '', '0000-00-00 00:00:00', '', '', '', '0000-00-00 00:00:00', 'inactive', '2020-11-02 15:50:17', '0000-00-00', ''),
(7, '1', 'user', 'admin@sds.sds', 'resrewrwerwerwer', 'resrewrwer', 'werwer', '07222 555555', '26-10-2020', 'UK', 'comment', 'admin@sds.sds', '', '', '0000-00-00 00:00:00', '', '', '', '0000-00-00 00:00:00', 'inactive', '2020-11-02 15:51:28', '0000-00-00', ''),
(9, '1', 'user', 'admin@ds.dfd', 'sdasasdsada', 'sdas', 'asdsada', '07222 555555', '27-10-2020', 'UK', 'comment', 'admin@ds.dfd', '$2a$08$lZF4laSqFI.GwF1IzwSmaO.xnvVEw.ktaM1fwkJJY5HS0vhFg.xBS', '', '0000-00-00 00:00:00', '', '', '', '0000-00-00 00:00:00', 'inactive', '2020-11-02 18:29:10', '0000-00-00', '272c6b537c503347fc19f34865022711'),
(10, '1', 'user', 'admin@ewds.ff', 'adwadwqdwdwqdwqwq', 'adwadwqdw', 'dwqdwqwq', '07222 555555', '26-10-2020', 'UK', 'comment', 'admin@ewds.ff', '$2a$08$6KvZbYf6l5W8wBd9dqIlvuLJPFTUhq3nzYf8Tl6qVaWDQT4m1QvLO', '', '0000-00-00 00:00:00', '', '', '', '0000-00-00 00:00:00', '', '2020-11-02 19:06:29', '0000-00-00', 'aa3bca904f6a5440e8b5b7576963bc17'),
(11, '1', 'user', 'hello@123.com', 'adsdcssdasd', 'adsdcs', 'sdasd', '07222 555555', '26-10-2020', 'UK', 'poll', 'hello@123.com', '$2a$08$8S0JXVOsmxGCdfPj1aTlG.A1dztndzGrEGgYV4QSwouIzWJx3ioyS', '', '0000-00-00 00:00:00', '', '', '', '0000-00-00 00:00:00', 'inactive', '2020-11-02 19:10:50', '0000-00-00', '4a04ad8809a397c6381eff4aff865aae'),
(12, '1', 'user', 'hello1@123.com', 'adsdcssdasd', 'adsdcs', 'sdasd', '07222 555555', '26-10-2020', 'UK', 'poll', 'hello1@123.com', '$2a$08$b7gzCYpefvUBk6HupLOiAevc38.hjrEVAABDC9ITfPwDm6dAl.qLW', '', '0000-00-00 00:00:00', '', '', '', '0000-00-00 00:00:00', 'inactive', '2020-11-02 19:11:30', '0000-00-00', 'cf61a979b0644ed7e18418b958c6b3fb'),
(13, '1', 'user', 'hello2@123.com', 'adsdcssdasd', 'adsdcs', 'sdasd', '07222 555555', '26-10-2020', 'UK', 'poll', 'hello2@123.com', '$2a$08$0/4RD5J0Rem7kbXZ5xeY4OosQ/Beke5U7Sjs58lvXsWbzLkYkWZHW', '', '0000-00-00 00:00:00', '', '', '', '0000-00-00 00:00:00', 'inactive', '2020-11-02 19:12:21', '0000-00-00', '5aa57890ac54a5691e9db6a0e2179661');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `login_attempts`
--
ALTER TABLE `login_attempts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_apidata`
--
ALTER TABLE `tbl_apidata`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_masters`
--
ALTER TABLE `tbl_masters`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `login_attempts`
--
ALTER TABLE `login_attempts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `tbl_apidata`
--
ALTER TABLE `tbl_apidata`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT for table `tbl_masters`
--
ALTER TABLE `tbl_masters`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
