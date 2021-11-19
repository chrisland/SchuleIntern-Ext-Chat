<?php

class setGroup extends AbstractRest {
	
	protected $statusCode = 200;


	public function execute($input, $request) {

        $group_id = (int)$input['group_id'];
        if (!$group_id) {
            $group_id = false;
        }

        $title = (string)$input['title'];
        if (!$title) {
            return [
                'error' => true,
                'msg' => 'Missing Title'
            ];
        }

        $members = json_decode(htmlspecialchars_decode((string)$input['members']));
        if (!$members || count($members) < 1) {
            return [
                'error' => true,
                'msg' => 'Missing Members'
            ];
        }



        include_once PATH_EXTENSION . 'models' . DS . 'Chat.class.php';
        include_once PATH_EXTENSION . 'models' . DS . 'Member.class.php';
        include_once PATH_EXTENSION . 'models' . DS . 'Groups.class.php';

        if ( $obj = extChatModelGroups::setGroup([
            "id" => $group_id,
            "title" => $title,
            "status" => 1
        ]) ) {

            if ( extChatModelMember::toggleMembers($group_id, $members) ) {
                return [
                    'error' => false,
                    'obj' => $obj
                ];
            }

            /*

            if ($group_id == false) { // Gruppe ist neu
                if ( extChatModelMember::setMember([
                    'group_id' => $obj['id']
                ]) ) {
                    return [
                        'error' => false,
                        'obj' => $obj
                    ];
                }
            } else {
                return [
                    'error' => false,
                    'obj' => $obj
                ];
            }
            */



        }
/*
        echo '<pre>';
        print_r($items);
        echo '</pre>';
        exit;
*/

        return [
            'error' => true,
            'msg' => 'Error'
        ];

	}


	/**
	 * Set Allowed Request Method
	 * (GET, POST, ...)
	 * 
	 * @return String
	 */
	public function getAllowedMethod() {
		return 'POST';
	}

    /**
     * Muss der Benutzer eingeloggt sein?
     * Ist Eine Session vorhanden
     * @return Boolean
     */
    public function needsUserAuth() {
        return true;
    }

	/**
	 * Ist eine System Authentifizierung nötig? (mit API key)
     * only if : needsUserAuth = false
	 * @return Boolean
	 */
	public function needsSystemAuth() {
		return true;
	}



}	

?>