<?php

namespace Database\Factories;

use App\Models\Communication;
use App\Models\Job;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

class CommunicationFactory extends Factory
{
	public const DATE_FORMAT = 'Y-m-d H:i:s';

	/**
	 * The name of the factory's corresponding model.
	 *
	 * @var string
	 */
	protected $model = Communication::class;

	/**
	 * Define the model's default state.
	 *
	 * @return array
	 */
	public function definition(): array
	{
		return [
			'id' => $this->faker->unique()->uuid(),
			'contact_initiated' => $this->faker->boolean(),
			'contacted_at' => Carbon::now()->format(self::DATE_FORMAT),
			'job_id' => Job::factory()->create()->get('id'),
			// TODO: pull the enum values from somewhere
			'reason' => $this->faker->randomElement([
				'apply',
				'interview',
				'questions',
				'offer',
				'acceptance',
				'rejection',
			]),
			'notes' => $this->faker->text(),
			'method' => $this->faker->randomElement([
				'linkedIn',
				'email',
				'phone',
				'video',
				'physical',
			]),
			'created_at' => Carbon::now()->subtract('year')->format(self::DATE_FORMAT),
			'updated_at' => Carbon::now()->subtract('month')->format(self::DATE_FORMAT),
		];
	}
}
