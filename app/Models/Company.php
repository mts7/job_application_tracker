<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Company extends Model
{
	use HasFactory;

	public $incrementing = false;

	protected $keyType = 'string';

	/**
	 * @return HasMany
	 */
	public function contacts(): HasMany
	{
		return $this->hasMany(Contact::class);
	}

	/**
	 * @return HasOne
	 */
	public function industry(): HasOne
	{
		return $this->hasOne(Industry::class);
	}

	/**
	 * @return HasMany
	 */
	public function jobs(): HasMany
	{
		return $this->hasMany(Job::class);
	}
}
