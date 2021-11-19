<?php
/**
 *
 */
class extChatModelMember
{

    /**
     * @var data []
     */
    private $data = [];

    private $user = false;

    /**
     * Constructor
     * @param $data
     */
    public function __construct($data = false)
    {
        if (!$data) {
            $data = $this->data;
        }
        $this->setData($data);
    }

    /**
     * @return data
     */
    public function setData($data = [])
    {
        $this->data = $data;
        return $this->getData();
    }

    /**
     * @return data
     */
    public function getData() {
        return $this->data;
    }

    /**
     * Getter
     */
    public function getID() {
        return $this->data['user_id'];
    }
    public function getUser() {
        if (!$this->user && $this->getID() ) {
            $this->user = user::getUserByID($this->getID());
        }
        return $this->user;
    }

    public function getCollection() {
        if ($this->getUser()) {
            $collection = [
                "id" => $this->getID(),
                "vorname" => $this->getUser()->getFirstName(),
                "nachname" => $this->getUser()->getLastName(),
                "name" => $this->getUser()->getDisplayName()
            ];
            return $collection;
        }

    }

/*
    public static function setMember($data) {

        if (!$data['group_id']) {
            return false;
        }
        $user = DB::getSession()->getUser();
        if (!$user->getUserID()) {
            return false;
        }
        $data = [
            "group_id" => DB::getDB()->escapeString($data['group_id']),
            "userChat_id" => $user->getUserID()
        ];
        if ( DB::getDB()->query("INSERT INTO ext_chat_groups_member
                (
                    group_id,
                    userChat_id
                )
                values(
                    ".$data['group_id'].",
                    ".$data['userChat_id']."
                )") ) {
            $data['id'] = DB::getDB()->insert_id();
            //$obj = new self($data);
            //return $obj->getCollection();
            return $data;
        }
        return false;

    }
    */


    public static  function isGroupMember($group_id, $user_id) {

        if (!$group_id || !$user_id) {
            return false;
        }

        $where = ' WHERE a.group_id = '.(int)$group_id.' AND a.userChat_id = '.(int)$user_id.' ';

        $dataSQL = DB::getDB()->query_first("SELECT a.id FROM ext_chat_groups_member as a ".$where);

        if ($dataSQL['id']) {
            return $dataSQL['id'];
        }
        return false;

    }


    public static function toggleMembers($group_id, $users) {

        if (!$group_id) {
            return false;
        }

        foreach ($users as $user_id) {

            $data = [
                "group_id" => $group_id,
                "userChat_id" => $user_id
            ];

            if ( $groupMemberID = self::isGroupMember($group_id, $user_id ) ) {

            } else {
                // Add Member
                if ( DB::getDB()->query("INSERT INTO ext_chat_groups_member
                (
                    group_id,
                    userChat_id
                )
                values(
                    ".$data['group_id'].",
                    ".$data['userChat_id']."
                )") ) {
                    $data['id'] = DB::getDB()->insert_id();
                    return $data;
                }
            }



        }

        return false;

    }



}