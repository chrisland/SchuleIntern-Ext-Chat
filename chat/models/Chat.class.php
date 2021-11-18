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
    public function getFrom() {
        return new extChatModelMember( ["user_id" => $this->data['from'] ] );
    }
    public function getMsg() {
        return $this->data['msg'];
    }
    public function getTime() {
        return $this->data['time'];
    }
    

    public function getCollection() {
        $collection = [
            "id" => $this->getID(),
            "from" => $this->getFrom()->getCollection(),
            "msg" => $this->getMsg(),
            "time" => $this->getTime()
        ];
        return $collection;
    }

}