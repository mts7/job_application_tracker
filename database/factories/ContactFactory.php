<?php

namespace Database\Factories;

use App\Models\Company;
use App\Models\Contact;
use App\Models\Position;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

class ContactFactory extends Factory
{
	public const DATE_FORMAT = 'Y-m-d H:i:s';

	/**
	 * The name of the factory's corresponding model.
	 *
	 * @var string
	 */
	protected $model = Contact::class;

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
			'email' => $this->faker->safeEmail(),
			'phone' => $this->faker->phoneNumber(),
			'company_id' => Company::factory()->create()->get('id'),
			'job_title' => $this->faker->jobTitle(),
			'position_id' => Position::factory()->create()->get('id'),
			'created_at' => Carbon::now()->subtract('year')->format(self::DATE_FORMAT),
			'updated_at' => Carbon::now()->subtract('month')->format(self::DATE_FORMAT),
		];
	}
}
