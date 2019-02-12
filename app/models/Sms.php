<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Sms extends Model
{
    protected $table = "messages";

    public $timestamps = true;

    const UPDATED_AT = null;

    protected $fillable = [
        'message',
        'created_at'
    ];

    /**
     * @return array
     */
    public function getAllAttributes()
    {
        return [
            'id'         => $this->id,
            'message'    => $this->message,
            'created_at' => $this->created_at->toDateTimeString()
        ];
    }
}