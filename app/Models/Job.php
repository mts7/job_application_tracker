<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;

class Job extends Model
{
	use HasFactory;

	public $incrementing = false;

	protected $keyType = 'string';

	/**
	 * @return BelongsTo
	 */
	public function company(): BelongsTo
	{
		return $this->belongsTo(Company::class);
	}

	/**
	 * @return HasManyThrough
	 */
	public function technologies(): HasManyThrough
	{
		return $this->hasManyThrough(JobTechnology::class, Technology::class);
	}
}
