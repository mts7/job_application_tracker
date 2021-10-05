<?php

namespace Database\Factories;

use App\Models\Company;
use App\Models\Industry;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

class CompanyFactory extends Factory
{
	/**
	 * The name of the factory's corresponding model.
	 *
	 * @var string
	 */
	protected $model = Company::class;

	/**
	 * Define the model's default state.
	 *
	 * @return array
	 */
	public function definition()
	{
		return [
            'id' => $this->faker->unique()->uuid(),
			'name' => $this->faker->name(),
			'headquarters' => $this->faker->streetAddress(),
			// TODO: see about populating industries first, then grabbing one
			'industry_id' => Industry::factory()->create()->get('id'),
			'website' => $this->faker->url(),
			'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
			'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
		];
	}
}
