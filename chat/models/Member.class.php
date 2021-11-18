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
        $collection = [
            "id" => $this->getID(),
            "vorname" => $this->getUser()->getFirstName(),
            "nachname" => $this->getUser()->getLastName()
        ];
        return $collection;
    }

}