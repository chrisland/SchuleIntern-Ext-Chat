<?php
/**
 *
 */


class extChatModelGroups
{

    /**
     * @var data []
     */
    private $data = [];


    private $members = false;
    private $chat = false;


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
        return $this->data['id'];
    }
    public function getTitle() {
        return $this->data['title'];
    }
    public function getStatus() {
        return $this->data['status'];
    }
    public function getLastMsgTime() {
        return $this->data['lastMsgTime'];
    }

    public function getMembers() {
        if (!$this->members && $this->getID() ) {
            $this->members = $this->loadMembers( $this->getID() );
        }
        return $this->members;
    }
    public function getMembersCollection() {
        $items = $this->getMembers();
        $collection = [];
        foreach ($items as $item) {
            $collection[] = $item->getCollection();
        }
        return $collection;
    }
    private function loadMembers($id) {
        if ( !(int)$id ) {
            return false;
        }
        $items =  [];
        $dataSQL = DB::getDB()->query("SELECT userChat_id as user_id FROM ext_chat_groups_member WHERE group_id = ".(int)$id);
        while ($data = DB::getDB()->fetch_array($dataSQL, true)) {
            $items[] = new extChatModelMember($data);
        }
        return $items;
    }


    public function getChat() {
        if (!$this->chat && $this->getID() ) {
            $this->chat = $this->loadChat( $this->getID() );
        }
        return $this->chat;
    }
    public function getChatCollection() {
        $items = $this->getChat();
        $collection = [];
        foreach ($items as $item) {
            $collection[] = $item->getCollection();
        }
        return $collection;
    }
    private function loadChat($id) {
        if ( !(int)$id ) {
            return false;
        }
        $items =  [];
        $dataSQL = DB::getDB()->query("SELECT * FROM ext_chat_msg WHERE group_id = ".(int)$id." ORDER BY time" );
        while ($data = DB::getDB()->fetch_array($dataSQL, true)) {
            $items[] = new extChatModelChat($data);
        }
        return $items;
    }


    /**
     * @return Array[]
     */
    public static function getMyByStatus($status = 1) {

        // 1 = open
        // 0 = closed

        $user = DB::getSession()->getUser();

        $orderBy = 'b.lastMsgTime';
        $where = ' WHERE a.userChat_id = "'.$user->getUserID().'"';
        if ($status) {
            $where .= 'b.status = "'.$status.'"';
        }
        $ret =  [];

        $dataSQL = DB::getDB()->query("SELECT a.userChat_id , b.id, b.title, b.lastMsgTime, b.status
            FROM ext_chat_groups_member as a
			LEFT JOIN ext_chat_groups AS b ON a.group_id LIKE b.id 

			".$where." ORDER BY ".$orderBy);


        //$dataSQL = DB::getDB()->query("SELECT * FROM ext_chat_groups ".$where);
        while ($data = DB::getDB()->fetch_array($dataSQL, true)) {
            $ret[] = new self($data);
        }
        return $ret;
    }

    public static  function getMyByID($id) {

        if (!$id) {
            return false;
        }

        $user = DB::getSession()->getUser();

        $where = ' WHERE a.id = '.$id.' AND a.userChat_id = "'.$user->getUserID().'"';

        $dataSQL = DB::getDB()->query("SELECT a.userChat_id , b.id, b.title, b.lastMsgTime, b.status
            FROM ext_chat_groups_member as a
			LEFT JOIN ext_chat_groups AS b ON a.group_id LIKE b.id 
			".$where);


        while ($data = DB::getDB()->fetch_array($dataSQL, true)) {
            return new self($data);
        }

    }


}