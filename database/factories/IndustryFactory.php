<?php

namespace Database\Factories;

use App\Models\Industry;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

class IndustryFactory extends Factory
{
	public const DATE_FORMAT = 'Y-m-d H:i:s';

	/**
	 * The name of the factory's corresponding model.
	 *
	 * @var string
	 */
	protected $model = Industry::class;

	/**
	 * Define the model's default state.
	 *
	 * @return array
	 */
	public function definition(): array
	{
		return [
			'id' => $this->faker->uuid(),
			'name' => $this->faker->name(),
			'created_at' => Carbon::now()->format(self::DATE_FORMAT),
			'updated_at' => Carbon::now()->format(self::DATE_FORMAT),
		];
	}
}
