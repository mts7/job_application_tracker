<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;

class Technology extends Model
{
	use HasFactory;

	public $incrementing = false;

	protected $keyType = 'string';

	/**
	 * @return HasManyThrough
	 */
	public function jobs(): HasManyThrough
	{
		return $this->hasManyThrough(JobTechnology::class, Job::class);
	}
}
