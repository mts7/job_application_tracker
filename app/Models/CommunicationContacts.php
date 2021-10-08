<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class CommunicationContacts extends Model
{
	use HasFactory;

	public $incrementing = false;

	protected $keyType = 'string';

	/**
	 * @return HasOne
	 */
	public function communication(): HasOne
	{
		return $this->hasOne(Communication::class);
	}

	/**
	 * @return HasOne
	 */
	public function contact(): HasOne
	{
		return $this->hasOne(Contact::class);
	}
}
