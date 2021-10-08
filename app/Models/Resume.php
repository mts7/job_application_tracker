<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Resume extends Model
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
}
