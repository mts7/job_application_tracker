<?php

use Database\Custom\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateCommunicationsTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up(): void
	{
		$schema = DB::connection()->getSchemaBuilder();
		$schema->blueprintResolver(function ($table, $callback) {
			return new Blueprint($table, $callback);
		});
		$schema->create('communications', function (Blueprint $table) {
			$table->uuidPrimary();
			$table->boolean('contact_initiated')->comment('Did the contact initiate communication?');
			$table->timestamp('contacted_at')->nullable();
			$table->foreignCascade('job_id');
			$table->string('reason')->nullable();
			$table->text('notes')->nullable();
			$table->string('method');
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down(): void
	{
		Schema::dropIfExists('communications');
	}
}
