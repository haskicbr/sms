<?php

namespace App\Controllers;

use App\Models\Sms;
use Psr\Container\ContainerInterface;
use Respect\Validation\Validator as V;
use Slim\Http\Request;
use Slim\Http\Response;

class SmsController
{
    /**
     * SmsController constructor.
     * @param ContainerInterface $ci
     */

    public function __construct(ContainerInterface $ci)
    {
        $this->ci = $ci;
        $this->validator = $this->ci['validator'];
    }

    public function validateRequest(Request $request)
    {
        $this->validator->validate($request, [
            'message' => [
                'rules'    => V::length(1, 255)
                    ->notBlank(),
                'messages' => [
                    'length'   => 'min message length 1 max 10000',
                    'notBlank' => 'message can not be empty'
                ],
            ],
        ]);

        if ($this->validator->isValid()) {
            return true;
        } else {
            return false;
        }
    }



    /**
     * @param Request $request
     * @param Response $response
     * @param $args
     * @return mixed
     */
    public function get(Request $request, Response $response, $args)
    {
        return Sms::all()->toJson();
    }

    /**
     * @param Request $request
     * @param Response $response
     * @param $args
     * @return mixed
     */
    public function create(Request $request, Response $response, $args)
    {
        if ($this->validateRequest($request)) {

            $model = new Sms();
            $model->setRawAttributes($request->getParsedBody());
            $model->save();

            return $response->withStatus(200)->withJson($model->getAllAttributes());

        } else {
            return $response->withStatus(400)->withJson($this->validator->getErrors());
        }
    }
}