<?php

namespace Database\Factories;

use App\Models\CommunicationContacts;
use Illuminate\Database\Eloquent\Factories\Factory;

class CommunicationContactsFactory extends Factory
{
	public const DATE_FORMAT = 'Y-m-d H:i:s';

	/**
	 * The name of the factory's corresponding model.
	 *
	 * @var string
	 */
	protected $model = CommunicationContacts::class;

	/**
	 * Define the model's default state.
	 *
	 * @return array
	 */
	public function definition(): array
	{
		return [
			//
		];
	}
}
