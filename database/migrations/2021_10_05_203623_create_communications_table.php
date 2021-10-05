<?php

use database\custom\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;

class CreateCommunicationsTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('communications', function (Blueprint $table) {
			$table->uuidPrimary();
			$table->boolean('contact_initiated')->comment('Did the contact initiate communication?');
			$table->timestamp('contacted_at')->nullable();
			$table->foreignCascade('job_id');
			$table->enum('reason', [
				'apply',
				'interview',
				'questions',
				'offer',
				'acceptance',
				'rejection',
			])
				->nullable();
			$table->text('notes')->nullable();
			$table->enum('method', [
				'linkedIn',
				'email',
				'phone',
				'video',
				'physical',
			]);
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::dropIfExists('communications');
	}
}
