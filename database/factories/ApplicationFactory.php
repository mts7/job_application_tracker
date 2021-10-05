<?php

namespace Database\Factories;

use App\Models\Application;
use App\Models\Communication;
use App\Models\Resume;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

class ApplicationFactory extends Factory
{
	public const DATE_FORMAT = 'Y-m-d H:i:s';

	/**
	 * The name of the factory's corresponding model.
	 *
	 * @var string
	 */
	protected $model = Application::class;

	/**
	 * Define the model's default state.
	 *
	 * @return array
	 */
	public function definition(): array
	{
		return [
			'id' => $this->faker->unique()->uuid(),
			'resume_id' => Resume::factory()->create()->get('id'),
			'communication_id' => Communication::factory()->create()->get('id'),
			'due_at' => Carbon::now()->add('week')->format(self::DATE_FORMAT),
			'applied_at' => Carbon::now()->format(self::DATE_FORMAT),
			'created_at' => Carbon::now()->subtract('year')->format(self::DATE_FORMAT),
			'updated_at' => Carbon::now()->subtract('month')->format(self::DATE_FORMAT),
		];
	}
}
