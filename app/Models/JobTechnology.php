<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class JobTechnology extends Model
{
	use HasFactory;

	public $incrementing = false;

	protected $keyType = 'string';

	/**
	 * @return BelongsTo
	 */
	public function job(): BelongsTo
	{
		return $this->belongsTo(Job::class);
	}

	/**
	 * @return BelongsTo
	 */
	public function technology(): BelongsTo
	{
		return $this->belongsTo(Technology::class);
	}
}
