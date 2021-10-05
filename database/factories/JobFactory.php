<?php

namespace Database\Factories;

use App\Models\Company;
use App\Models\Job;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

class JobFactory extends Factory
{
	public const DATE_FORMAT = 'Y-m-d H:i:s';

	/**
	 * The name of the factory's corresponding model.
	 *
	 * @var string
	 */
	protected $model = Job::class;

	/**
	 * Define the model's default state.
	 *
	 * @return array
	 */
	public function definition()
	{
		return [
			'id' => $this->faker->unique()->uuid(),
			'title' => $this->faker->jobTitle(),
			'company_id' => Company::factory()->create()->get('id'),
			'description_link' => $this->faker->url(),
			'salary_low' => $this->faker->numberBetween(70000, 120000),
			'salary_high' => $this->faker->numberBetween(125000, 197000),
			'pto_days' => $this->faker->numberBetween(10, 50),
			'remote' => $this->faker->boolean(85),
			'listed_at' => Carbon::now()->format(self::DATE_FORMAT),
			'created_at' => Carbon::now()->format(self::DATE_FORMAT),
			'updated_at' => Carbon::now()->format(self::DATE_FORMAT),
		];
	}
}
