<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasOneThrough;

class Contact extends Model
{
	use HasFactory;

	public $incrementing = false;

	protected $keyType = 'string';

	/**
	 * @return HasOneThrough
	 */
	public function communication(): HasOneThrough
	{
		return $this->hasOneThrough(CommunicationContacts::class, Communication::class);
	}

	/**
	 * @return BelongsTo
	 */
	public function company(): BelongsTo
	{
		return $this->belongsTo(Company::class);
	}

	/**
	 * @return HasOne
	 */
	public function position(): HasOne
	{
		return $this->hasOne(Position::class);
	}
}
