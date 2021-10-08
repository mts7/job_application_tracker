<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasOneThrough;

class Communication extends Model
{
	use HasFactory;

	public $incrementing = false;

	protected $keyType = 'string';

	/**
	 * @return BelongsTo
	 */
	public function application(): BelongsTo
	{
		return $this->belongsTo(Application::class);
	}

	/**
	 * @return HasOneThrough
	 */
	public function contact(): HasOneThrough
	{
		return $this->hasOneThrough(CommunicationContacts::class, Contact::class);
	}

	/**
	 * @return HasOne
	 */
	public function job(): HasOne
	{
		return $this->hasOne(Job::class);
	}
}
