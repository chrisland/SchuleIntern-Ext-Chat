CREATE TABLE IF NOT EXISTS `ext_chat_group` (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
    `title` varchar(100) DEFAULT NULL,
    `member_id` varchar(100) DEFAULT NULL,
   PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `ext_chat_group_member` (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
    `group_id` int(11) DEFAULT NULL,
    `userChat_id` varchar(100) DEFAULT NULL,
    PRIMARY KEY (`id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `ext_chat_msg` (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
    `group_id` int(11) DEFAULT NULL,
    `from` varchar(100) DEFAULT NULL,
    `to` varchar(100) DEFAULT NULL,
    `msg` varchar(1000) DEFAULT NULL,
   PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

