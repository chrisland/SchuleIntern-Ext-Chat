<?php
/**
 *
 */
class extChatModelChat
{

    /**
     * @var data []
     */
    private $data = [];



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
    public function getUserID() {
        return $this->data['user_id'];
    }
    public function getMember() {
        return new extChatModelMember( ["user_id" => $this->data['user_id'] ] );
    }
    public function getMsg() {
        return $this->data['msg'];
    }
    public function getTimeCreate() {
        return $this->data['timeCreate'];
    }
    

    public function getCollection() {
        $collection = [
            "id" => $this->getID(),
            "from" => false,
            "msg" => nl2br((string)$this->getMsg()),
            "timeCreate" => date("d.m.Y H:i", $this->getTimeCreate() )
        ];
        $user = DB::getSession()->getUser();
        if ($user->getUserID() && $user->getUserID() == $this->getUserID() ) {
            $collection['from'] = true;
        } else {
            $collection['from'] = $this->getMember()->getCollection();
        }
        return $collection;
    }

    public static function setMsg($data) {
        if (!$data['group_id'] || !$data['msg']) {
            return false;
        }
        $user = DB::getSession()->getUser();
        if (!$user->getUserID()) {
            return false;
        }
        // TODO: ist der User in der Gruppe ?
        $data = [
            "status" => 1,
            "group_id" => (int)DB::getDB()->escapeString($data['group_id']),
            "user_id" => $user->getUserID(),
            "msg" => DB::getDB()->escapeString($data['msg']),
            "timeCreate" => time()
        ];
        if ( DB::getDB()->query("INSERT INTO ext_chat_msg
                (
                    status,
                    group_id,
                    user_id,
                    msg,
                    timeCreate
                )
                values(
                    ".$data['status'].",
                    ".$data['group_id'].",
                    ".$data['user_id'].",
                    '".$data['msg']."',
                    '".$data['timeCreate']."'
                )") ) {
            $data['id'] = DB::getDB()->insert_id();
            $msgObj = new extChatModelChat($data);
            return $msgObj->getCollection();
        }
        return false;

    }

}